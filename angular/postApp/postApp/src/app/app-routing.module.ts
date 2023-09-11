import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CreatePostPageComponent } from './components/create-post-page/create-post-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'post', component: PostPageComponent },
  // { path: 'createpost', component: CreatePostPageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
