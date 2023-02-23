import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  createData(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data)
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError('Something went wrong');
        })
      );
  }

  updateData(data: any) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', data)
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError('Something went wrong');
        })
      );
  }

  patchData(data: any) {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/1', data)
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError('Something went wrong');
        })
      );
  }

  deleteData() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError('Something went wrong');
        })
      );
  }
}
