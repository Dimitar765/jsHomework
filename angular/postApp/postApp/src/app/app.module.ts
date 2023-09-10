import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CreatePostPageComponent } from './components/create-post-page/create-post-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyDpqUFbSa8qd2mW6NWDxDIWUNIyZbF2zSM",
  authDomain: "postapp-f3d2e.firebaseapp.com",
  projectId: "postapp-f3d2e",
  storageBucket: "postapp-f3d2e.appspot.com",
  messagingSenderId: "1080920672091",
  appId: "1:1080920672091:web:7092ff8a24cfaaaa3dfc7e"
};


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    PostPageComponent,
    CreatePostPageComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
