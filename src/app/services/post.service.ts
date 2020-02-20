import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post'
import { Body } from '../models/Body'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string = 'https://api.reddit.com/hot';

  constructor(private http:HttpClient) { }

  getPosts():Observable<Body>{
    return this.http.get<Body>(this.postUrl);
  }
}
