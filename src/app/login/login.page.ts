import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: any;
  password: any;
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'alwin' && this.password === '14210013') {
      this.showError = false;
      this.router.navigateByUrl('/app');
    } else {
      this.showError = true;
      this.errorMessage = 'Invalid login';
    }
  }
}