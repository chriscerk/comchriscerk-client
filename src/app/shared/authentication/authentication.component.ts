import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    let key = event.key;
    if(key == 'i') {
      this.login();
    }
    else if(key == 'o') {
      this.logout();
    }
  }

  constructor(private authService: AuthService) {}

  login() {
    this.authService.signInWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
