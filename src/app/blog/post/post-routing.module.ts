import { ContentPostComponent } from './content-post/content-post.component';
import { EditPostComponent } from './../post/edit-post/edit-post.component';
import { AuthGuard } from './../../core/services/auth-guard.service';
import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const post_routes: Routes = [
    {
      path:'',
      component: PostComponent,
      children: [
        {
          path: 'edit',
          canActivate: [AuthGuard],
          component: EditPostComponent
        },
        {
          path: 'content',
          component: ContentPostComponent
        },
        {
          path: '**',
          component: ContentPostComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(post_routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class PostRoutingModule {
  static components = [PostComponent, EditPostComponent, ContentPostComponent];
}