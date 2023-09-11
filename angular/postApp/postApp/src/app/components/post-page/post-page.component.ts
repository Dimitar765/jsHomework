import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Post } from 'src/app/interfaces/postInteface'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {


  constructor(private readonly postService: PostServiceService) { }
  posts: Post[] = []
  ngOnInit(): void {
    const temp = this.postService.getPosts()
    temp.subscribe((data) => {
      this.posts = data;
      console.log(this.posts)



    })

  }

}
