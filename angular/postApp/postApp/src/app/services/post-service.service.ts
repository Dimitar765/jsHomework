import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, Timestamp, addDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { RawPost } from 'src/app/interfaces/rawPostInterface'
import { Post } from '../interfaces/postInteface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private readonly fireStore: Firestore) { }

  // posts: Post[] = []
  getPosts = () => {
    const postsColection = collection(this.fireStore, 'posts');
    // console.log(postsColection);

    const postsColectionData = collectionData(postsColection, {
      idField: 'id',
    }) as Observable<Post[]>;

    return postsColectionData;
  }

  createPost = (title: string, content: string) => {
    const postToBeCreated = {
      title: title,
      content: content,
      createdAt: Timestamp.fromDate(new Date())
    }
    const postColection = collection(this.fireStore, 'posts')

    return from(addDoc(postColection, postToBeCreated))

  }



}
