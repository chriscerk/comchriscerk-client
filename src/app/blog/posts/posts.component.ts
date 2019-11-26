import { Post } from './../../shared/models/post';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
    let unorderedPosts = this.postsCollection.snapshotChanges().pipe(map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        data.Id = a.payload.doc.id;
        return data;
      });
    }));

    this.posts = unorderedPosts.pipe(tap(results => {
      results.sort((a: Post, b: Post) => {
        if (a.EntryTime > b.EntryTime) {
          return -1;
        } else if (a.EntryTime < b.EntryTime) {
          return 1;
        } else {
          return 0;
        }
      });
    }));
  }
  
  ngOnInit() {
    
  }

  transform(array: Array<Post>, args: string): Array<Post> {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
