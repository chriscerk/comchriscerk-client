import { PrettyURLPipe } from './../shared/pipes/pretty-url.pipe';
import { AuthGuard } from './../core/services/auth-guard.service';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from './../shared/shared.module';
import { TextAreaAutosizeDirective } from './../shared/directives/textarea-autosize.directive';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule,
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [BlogRoutingModule.components],
  providers: [PrettyURLPipe, AuthGuard]
})
export class BlogModule { }
