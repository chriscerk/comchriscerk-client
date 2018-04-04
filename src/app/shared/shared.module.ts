import { PrettyURLPipe } from './pipes/pretty-url.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './pipes/summary.pipe';
import { TextAreaAutosizeDirective } from './directives/textarea-autosize.directive';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      SummaryPipe,
      PrettyURLPipe,
      TextAreaAutosizeDirective,
      AuthenticationComponent
  ],
  exports: [
    SummaryPipe, 
    PrettyURLPipe, 
    TextAreaAutosizeDirective, 
    AuthenticationComponent
  ]
})
export class SharedModule { }
