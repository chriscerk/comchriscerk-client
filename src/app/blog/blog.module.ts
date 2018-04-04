import { SharedModule } from './../shared/shared.module';
import { TextAreaAutosizeDirective } from './../shared/directives/textarea-autosize.directive';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule,
    SharedModule
  ],
  declarations: [EditPostComponent]
})
export class BlogModule { }
