import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/about' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'posts', component: PostsComponent},
  { path: 'posts/:postName/:postId', component: PostComponent},
  { path: '**', pathMatch:'full', redirectTo: '/about' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }