import { Component, OnInit } from '@angular/core';
import { ICatPicture } from '../model/CatPicture';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'cat-mash-app';
  voteCounter = 156891;
  cats: ICatPicture[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getCats().subscribe(data => {
      console.log('Searching cats..');
      console.log(data);
    });
  }


}
