import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule, RouterModule, AngularFireAuthModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent],
  providers: [AuthGuard, AuthService]
})
export class CoreModule { }
