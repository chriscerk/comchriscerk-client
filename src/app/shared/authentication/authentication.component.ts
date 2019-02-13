import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, AfterViewInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    let key = event.key;
    let target = event.target as HTMLElement;

    if(target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') {
      return;
    }
    
    switch(key)
    {
      case 'i':
        this.login();
        break;
      case 'o':
        this.logout();
        break;
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
