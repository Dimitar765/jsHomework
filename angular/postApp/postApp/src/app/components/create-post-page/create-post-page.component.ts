import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
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
  postData = new BehaviorSubject<any>([])

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
    this.postService.createPost(postData.
      title, postData.content).subscribe()

    return postData

  }
}
