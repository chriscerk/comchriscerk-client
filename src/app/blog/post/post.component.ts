import { Post } from './../../shared/models/post';
import { PrettyURLPipe } from './../../shared/pipes/pretty-url.pipe';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute, ParamMap } from '@angular/router';
import { HostListener } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';



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
  public postId: any;
  public postName: any;
  public isLoggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      
      this.postName = params.get('postName');
    
      this.postId = params.get('postId');
      this.isLoggedIn = authService.isLoggedIn();
    });
  }

  ngOnInit() {      
  }

  editPost() {
    this.router.navigateByUrl("/"  + this.postName + "/" + this.postId + "/edit");
  }
}
