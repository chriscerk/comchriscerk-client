import { AuthGuard } from './../core/services/auth-guard.service';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const blog_routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        children: [
          { path: 'posts/:postName/:postId', loadChildren: 'app/blog/post/post.module#PostModule'}
        ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(blog_routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class BlogRoutingModule {
  static components = [PostsComponent];
}