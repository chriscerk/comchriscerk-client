import { AuthService } from './../core/services/auth.service';
import { Post } from './../shared/models/post';
import { Meta, Title } from "@angular/platform-browser";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute, ParamMap } from '@angular/router';
import { PrettyURLPipe } from '../shared/pipes/pretty-url.pipe';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    let key = event.key;
    if(key == 'e') {
      this.editPost();
    }
  }

  private afDoc: AngularFirestoreDocument<Post>;
  post: Post;
  public postId: any;
  public isLoggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private prettyURL: PrettyURLPipe,
    private authService: AuthService, 
    meta: Meta,
    title: Title
  ) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      
      let postName = params.get('postName');
      let postTitle = this.prettyURL.untransform(postName);
      title.setTitle(postTitle); 
    
      this.postId = params.get('postId');
      
      this.afDoc = afs.doc<Post>('posts/' + this.postId);
      this.afDoc.valueChanges()
        .subscribe(p => {
          this.post= p;
          meta.addTags([
              { name: 'author',   content: 'Chris Cerk'},
              { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
              { name: 'description', content: 'My first blog post' }
            ]);
        });

      this.isLoggedIn = authService.isLoggedIn();
    });


  }

  ngOnInit() {      
  }

  editPost() {
    this.router.navigateByUrl("/edit-post/" + this.postId);
  }
}
