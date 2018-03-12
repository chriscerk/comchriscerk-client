import { firebaseConfig } from './../environments/firebase.config';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'comchriscerk'}),
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
