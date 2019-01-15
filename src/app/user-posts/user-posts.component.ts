import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserPostService } from './user-post.service';
import { Subject } from "rxjs";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit, OnDestroy {
  dtTrigger = new Subject();
  userPostsData: any;
  dtOptions: any;
  constructor(private userPostService :UserPostService ) { }

  ngOnInit() {
    this.getUsersPostsList();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getUsersPostsList() {
    this.userPostService.getUsersPostsList().subscribe(res => {
      console.log("response is ::"+ JSON.stringify(res));
      this.userPostsData = res;
      this.dtTrigger.next();
    });
  }

}
