import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ILatelierData } from 'src/model/LatelierApi';
import { IVote } from 'src/model/Vote';
import { IRequestVoteIn } from 'src/model/RequestVoteIn';



const CATS_RESOURCE = '/search/cats';
const CATS_VOTES_RESOURCE = '/cats/votes';
const POST_VOTE = '/vote';
const VOTES_NUMBER_RESOURCE = 'votes/counter';
const CLIENT_IP_RESOURCE = 'http://api.ipify.org';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getCats(): Observable<ILatelierData> {
    return this.http.get<ILatelierData>(CATS_RESOURCE);
  }

  getClientIp(): Observable<string> {
    // about 'text' as 'text' https://github.com/angular/angular/issues/18586#issuecomment-321333934
    const requestOptions: object = {
      responseType: 'text' as 'text'
    }
    return this.http.get<string>(CLIENT_IP_RESOURCE, requestOptions);
  }

  getVotesForUser(userId: string) {
    return this.http.get<IVote[]>(CATS_VOTES_RESOURCE + '/' + userId);
  }

  getAllVotes() {
    return this.http.get<IVote[]>(CATS_VOTES_RESOURCE);
  }

  getVotesTotalNumber(): Observable<number> {
    return this.http.get<number>(VOTES_NUMBER_RESOURCE);
  }

  postVote(vote: IRequestVoteIn): Observable<string> {
    const requestOptions: object = {
      responseType: 'text' as 'text'
    }
    return this.http.post<string>(POST_VOTE, vote, requestOptions);
  }
}
