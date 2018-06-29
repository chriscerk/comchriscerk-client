import { AuthGuard } from './../../core/services/auth-guard.service';
import { PrettyURLPipe } from './../../shared/pipes/pretty-url.pipe';
import { PostRoutingModule } from './post-routing.module';
import { SharedModule } from './../../shared/shared.module';

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
    PostRoutingModule
  ],
  declarations: [PostRoutingModule.components],
  providers: [PrettyURLPipe, AuthGuard]
})
export class PostModule { }
