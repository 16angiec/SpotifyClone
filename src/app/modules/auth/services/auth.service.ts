import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = environment.api

  constructor(private httpClient: HttpClient, private cookie: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.httpClient.post(`${this.url}/auth/login`, body).pipe(
      tap((response: any) => {
        const { tokenSession, data } = response
        this.cookie.set('token_servicio', tokenSession, 4, '/')
      })
    )
  }
}
