import { AuthService } from './core/services/auth.service';
import { BlogModule } from './blog/blog.module';
import { MarkdownModule } from 'ngx-markdown';
import { PrettyURLPipe } from './shared/pipes/pretty-url.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {HotkeyModule} from 'angular2-hotkeys';

import { firebaseConfig } from './../environments/firebase.config';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'comchriscerk'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    CoreModule,
    AppRoutingModule,
    SharedModule,
    BlogModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(firebaseConfig),
    MarkdownModule.forRoot(),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [PrettyURLPipe, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
