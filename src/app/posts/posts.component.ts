import { SummaryPipe } from './../shared/pipes/summary.pipe';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = afs.collection<Post>('posts');
    this.posts = this.postsCollection.valueChanges();
  }

  ngOnInit() {
  }

}
