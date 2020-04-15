import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs'

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData = { title, content };
    return this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-ba5d8.firebaseio.com/posts.json', // .json suffix required by firebase
        postData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          console.log(error);
          this.error.next(error.error.error);
        }
      );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-ba5d8.firebaseio.com/posts.json')
      // .pipe(map((responseData: { [key: string]: Post }) => {
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ id: key, ...responseData[key]})
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-ba5d8.firebaseio.com/posts.json')
  }
}