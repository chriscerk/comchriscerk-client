import { Post } from './../../../shared/models/post';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  private afDoc: AngularFirestoreDocument<Post>;
  public markdown = "# Your Content";
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {    
      let postId = params.get('postId');
      
      this.afDoc = afs.doc<Post>('posts/' + postId);
      this.afDoc.valueChanges()
        .subscribe(p => {
          this.post = p;
          this.markdown = this.post.Content;
        });
    });
  }

  ngOnInit() {
    
  }

  ngAfterInit() {
    this.markdown = this.post.Content;
  }

  save() {
    this.post.Content = this.markdown;
    this.afDoc.update(this.post);
  }
}

