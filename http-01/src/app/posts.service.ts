import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs'

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty') // a param provided by firebase
    searchParams = searchParams.append('custom', 'key')

    return this.http.get<{ [key: string]: Post }>(
      'https://ng-complete-guide-ba5d8.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        // params: new HttpParams().set('print', 'pretty') // a param provided by firebase
        params: searchParams,
      },
    )
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

  createAndStorePost(title: string, content: string) {
    const postData = { title, content };
    return this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-ba5d8.firebaseio.com/posts.json', // .json suffix required by firebase
        postData,
        {
          // observe: 'body'
          observe: 'response', // get whole response instead of just the body
        }
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

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-ba5d8.firebaseio.com/posts.json',
      {
        // observe: 'body'
        observe: 'events',
        responseType: 'text',
      }
    )
      .pipe(tap(event => {
        console.log(event)
        if (event.type === HttpEventType.Response) {
          console.log(event.body)
        }
        if (event.type === HttpEventType.Sent) {
          console.log(event)
        }
      }))
  }
}