import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersPostsList (): Observable<any> {
    let userPostsUrl = 'http://jsonplaceholder.typicode.com/posts';
    return this.http.get(userPostsUrl)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  handleError(error: Response | any) {
    console.error("Error ocurred during processing request, please try again later");
    return throwError(error.error);
  }
  
}
