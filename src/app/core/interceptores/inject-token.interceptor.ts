import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.cookie.get('token')
      let newRequest = request
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
      return next.handle(newRequest)
    } catch (e) {
      console.log('Error', e)
      return next.handle(request)
    }
  }
}
