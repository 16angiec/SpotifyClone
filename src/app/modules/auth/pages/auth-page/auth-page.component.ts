import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  errorSession: boolean = false;
  FormLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.FormLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.min(8),
        Validators.max(16),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.FormLogin.value;
    this.authService.sendCredentials(email, password).subscribe(response => {
      const { tokenSession, data } = response
      this.cookie.set('token', tokenSession, 4, '/')
      console.log('Sesión iniciada correctamente')
    }, err => {
      this.errorSession = true;
      console.log('Credenciales invalidas')
    })
  }
}
