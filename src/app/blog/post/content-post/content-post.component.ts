import { PrettyURLPipe } from './../../../shared/pipes/pretty-url.pipe';
import { Post } from './../../../shared/models/post';
import { Meta, Title } from "@angular/platform-browser";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute, ParamMap } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit {

  private afDoc: AngularFirestoreDocument<Post>;
  post: Post;
  public postId: any;
  public postName: any;
  public isLoggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private prettyURL: PrettyURLPipe,
    meta: Meta,
    title: Title
  ) {

    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      
      this.postName = params.get('postName');
      let postTitle = this.prettyURL.untransform(this.postName);
      title.setTitle(postTitle);
    
      this.postId = params.get('postId');
      
      this.afDoc = afs.doc<Post>('posts/' + this.postId);
      this.afDoc.valueChanges()
        .subscribe(p => {
          this.post = p;
          meta.addTags([
              { name: 'author',   content: 'Chris Cerk'},
              { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
              { name: 'description', content: 'My first blog post' }
            ]);
        });
    });
  }

  ngOnInit() {}
}
