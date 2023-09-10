import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/postInteface';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})
export class CreatePostPageComponent implements OnInit {

  constructor(private readonly postService: PostServiceService) { }

  postForm: FormGroup

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {

    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    })

  }



  onFormSubmit = () => {
    const postData: Post = this.postForm.value
    const test = this.postService.createPost(postData.title, postData.content)
    console.log(this.postForm.value);
    console.log('from test', test);


    return postData

  }
}
