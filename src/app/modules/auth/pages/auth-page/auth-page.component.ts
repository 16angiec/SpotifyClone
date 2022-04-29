import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  FormLogin: FormGroup = new FormGroup({});
  constructor() {}

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
    const body = this.FormLogin.value;
  }
}
