import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-if',
  templateUrl: './exemplo-if.component.html',
  styleUrls: ['./exemplo-if.component.scss']
})
export class ExemploIfComponent {
  user: string = '';
  password: string = '';
  loggedIn: boolean = false;
  invalidLogin: boolean = false;
  showSuccessPopup: boolean = false;

  login() {
    if (this.user === 'usuario' && this.password === '123') {
      this.showSuccessPopup = true;
      this.invalidLogin = false;
      this.user = '';
      this.password = '';
    } else {
      this.showSuccessPopup = false;
      this.invalidLogin = true;
      this.user = '';
      this.password = '';
    }
  }

  closePopup() {
    this.showSuccessPopup = false;
  }
}
