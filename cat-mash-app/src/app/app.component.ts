import { Component, OnInit, Inject } from '@angular/core';
import { ICatPicture } from '../model/CatPicture';
import { AppService } from './app.service';
import { IVote } from 'src/model/Vote';
import { ICatPair } from 'src/model/CatPair';
import { IRequestVoteIn } from 'src/model/RequestVoteIn';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface CatsRankingDialogData {
  catsRanking: Map<string, number>;
  maxValue: number;
}

export const RANKING_DISPLAY_NB = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'cat-mash-app';
  voteCounter = 0;
  catsPossiblePairs: ICatPair[] = [];

  userId: string;
  userVotes: IVote[];
  firstCat: ICatPicture;
  secondCat: ICatPicture;

  currentPairIndex = 0;
  isDataLoaded = false;

  constructor(private appService: AppService, public catRankingDialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUserId();
    this.loadVotesTotalNumber();
  }

  vote(isFirstCatChosen: boolean): void {
    const voteRequest = {} as IRequestVoteIn;
    voteRequest.userId = this.userId;
    voteRequest.catId1 = this.firstCat.id;
    voteRequest.catId2 = this.secondCat.id;
    voteRequest.isFirstCatChosen = isFirstCatChosen;
    this.appService.postVote(voteRequest).subscribe(data => {
      const newUserVote = {} as IVote;
      newUserVote.catId1 = this.firstCat.id;
      newUserVote.catId2 = this.secondCat.id;
      newUserVote.isFirstCatChosen = isFirstCatChosen;
      this.userVotes.push(newUserVote);
      this.voteCounter++;
      this.findUnvotedCats();
    });
  }

  loadUserId(): void {
    this.appService.getClientIp().subscribe(data => {
      this.userId = data;
      this.loadUserVotes();
    });
  }

  loadVotesTotalNumber(): void {
    this.appService.getVotesTotalNumber().subscribe(data => {
      this.voteCounter = data;
    })
  }

  loadUserVotes(): void {
    this.appService.getVotesForUser(this.userId).subscribe(data => {
      this.userVotes = data;
      this.loadCats();
    });
  }

  loadCats(): void {
    this.appService.getCats().subscribe(data => {
      const catPairInit = {} as ICatPair;
      catPairInit.cat1 = data.images[0];
      catPairInit.cat2 = data.images[1];
      this.catsPossiblePairs.push(catPairInit);
      this.computePossibleCatPairs(data.images);
      // TODO Clear method to delete any existing votes in database with unknown cats
      this.findUnvotedCats();
      this.isDataLoaded = true;
    });
  }

  computePossibleCatPairs(cats: ICatPicture[]): void {
    for (const cat1 of cats) {
      for (const cat2 of cats) {
        if (cat1.id !== cat2.id) {
          let pairExist = false;
          this.catsPossiblePairs.forEach((possiblePair) => {
            pairExist = this.catPairEquals(possiblePair.cat1.id, possiblePair.cat2.id, cat1.id, cat2.id);
          });
          if (!pairExist) {
            const newCatPair = {} as ICatPair;
            newCatPair.cat1 = cat1;
            newCatPair.cat2 = cat2;
            this.catsPossiblePairs.push(newCatPair);
          }
        }
      }
    }
    this.clearAlreadyVotedPairs();
  }

  clearAlreadyVotedPairs(): void {
    let i = this.catsPossiblePairs.length;
    while (i--) {
      let pairAlreadyVoted = false;
      this.userVotes.forEach((vote) => {
        // tslint:disable-next-line: max-line-length
        pairAlreadyVoted = this.catPairEquals(vote.catId1, vote.catId2, this.catsPossiblePairs[i].cat1.id, this.catsPossiblePairs[i].cat2.id);
      });
      if (pairAlreadyVoted) {
        this.catsPossiblePairs.splice(i, 1);
      }
    }
    // shuffle the array
    for (let index = this.catsPossiblePairs.length - 1; index > 0; index--) {
      const newIndex = Math.floor(Math.random() * (index + 1));
      const tmp = this.catsPossiblePairs[index];
      this.catsPossiblePairs[newIndex] = tmp;
    }
  }

  findUnvotedCats(): void {
    for (const vote of this.userVotes) {
      const currentPair = this.catsPossiblePairs[this.currentPairIndex];
      const currentPairAlreadyVoted = this.catPairEquals(vote.catId1, vote.catId2, currentPair.cat1.id, currentPair.cat2.id);
      if (currentPairAlreadyVoted) {
        this.currentPairIndex++;
        this.findUnvotedCats();
      }
    }
    this.firstCat = this.catsPossiblePairs[this.currentPairIndex].cat1;
    this.secondCat = this.catsPossiblePairs[this.currentPairIndex].cat2;
  }

  catPairEquals(firstCatId1: string, firstCatId2: string, secondCatId1: string, secondCatId2: string): boolean {
    if (firstCatId1 === secondCatId1 && firstCatId2 === secondCatId2) {
      return true;
    }
    if (firstCatId1 === secondCatId2 && firstCatId2 === secondCatId1) {
      return true;
    }
    return false;
  }

  openDialog(): void {
    let votesHistoric = [] as IVote[];
    this.appService.getAllVotes().subscribe(data => {
      votesHistoric = data;
      let existingCats = [] as ICatPicture[];
      this.appService.getCats().subscribe(cats => {
        existingCats = cats.images;
        let rankingData = new Map<string, number>();
        votesHistoric.forEach(vote => {
          if (vote.isFirstCatChosen) {
            const mapKey = existingCats.find(cat => cat.id === vote.catId1).url;
            if (rankingData.get(mapKey) !== undefined) {
              rankingData.set(mapKey, rankingData.get(mapKey) + 1);
            } else {
              rankingData.set(mapKey, 1);
            }
          } else {
            const mapKey = existingCats.find(cat => cat.id === vote.catId2).url;
            if (rankingData.get(mapKey) !== undefined) {
              rankingData.set(mapKey, rankingData.get(mapKey) + 1);
            } else {
              rankingData.set(mapKey, 1);
            }
          }
        });
        const sortStringValues = (a, b) => b[1] - a[1];
        rankingData = new Map<string, number>(Array.from(rankingData).sort(sortStringValues));
        rankingData = new Map(Array.from(rankingData).splice(0, RANKING_DISPLAY_NB));
        const maxValue = Array.from(rankingData)[0][1];
        const dialogRef = this.catRankingDialog.open(CatsRankingDialog, {
          width: '50vw',
          position: { bottom: '0' },
          data: { rankingData, maxValue }
        });
        dialogRef.afterClosed().subscribe((result) => {
        });
      });
    });
  }

}

@Component({
  selector: 'app-cat-ranking-dialog',
  templateUrl: './app-cat-ranking-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class CatsRankingDialog {

  constructor(
    public dialogRef: MatDialogRef<CatsRankingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CatsRankingDialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getKeys(map) {
    return Array.from(map.keys());
  }

}
