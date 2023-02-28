import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  private progressRef: NgProgressRef;

  constructor(private progress: NgProgress) {
    this.progressRef = this.progress.ref();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.progressRef.start();
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.progressRef.complete();
          }
        },
        (error) => {
          this.progressRef.complete();
        }
      )
    );
  }
}
