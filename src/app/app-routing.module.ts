import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';


const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/about' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule'},
  { path: ':postName/:postId', loadChildren: 'app/blog/post/post.module#PostModule'},
  { path: '**', pathMatch:'full', redirectTo: '/about' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }