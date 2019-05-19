import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICatPicture } from 'src/model/CatPicture';
import { Observable } from 'rxjs/internal/Observable';



const CATS_HOST = "https://latelier.co/data/cats.json";

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getCats(): Observable<ICatPicture[]> {
    return this.http.get<ICatPicture[]>(CATS_HOST);
  }
}
