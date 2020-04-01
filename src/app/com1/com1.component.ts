import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {

  allPosts: any = [];

  constructor( 
    private apiServ: ApiService, 
    private dataServ: DataService
    ) { }

  ngOnInit() {
    this.posts();
  }
  posts() {
    this.apiServ.getPost(1, 5)
    .subscribe(
      data => {
        console.log(data);
        this.allPosts = data;
        this.dataServ.change(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}