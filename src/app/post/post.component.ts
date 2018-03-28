import { Post } from './../shared/models/post';
import { Meta, Title } from "@angular/platform-browser";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute, ParamMap } from '@angular/router';
import { PrettyURLPipe } from '../shared/pipes/pretty-url.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private afDoc: AngularFirestoreDocument<Post>;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private prettyURL: PrettyURLPipe,
    meta: Meta,
    title: Title
  ) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      
      let postName = params.get('postName');
      let postTitle = this.prettyURL.untransform(postName);
      title.setTitle(postTitle); 
    
      let postId = params.get('postId');
      
      this.afDoc = afs.doc<Post>('posts/' + postId);
      this.afDoc.valueChanges()
        .subscribe(p => {
          this.post= p;
          meta.addTags([
              { name: 'author',   content: 'Chris Cerk'},
              { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
              { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
            ]);
          });
        });
  }

  ngOnInit() {      
  }
}
