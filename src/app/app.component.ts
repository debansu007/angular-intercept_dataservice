import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  user: any = {
    email: '',
    password: ''
  };
  post: any = {
    id: 1,
    userId: 1,
    title: 'New Post Title',
    body: 'New post body. New post body...'
  }

  constructor ( private apiServ: ApiService ) {}

  ngOnInit() {
    // this.posts();
  }
  login() {
    this.apiServ.userLogin(this.user)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  posts() {
    this.apiServ.getPost(1, 5)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  postNew() {
    this.apiServ.writePost(this.post)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
