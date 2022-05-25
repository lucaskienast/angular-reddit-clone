import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CreateSubredditComponent} from "./subreddit/create-subreddit/create-subreddit.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {ListSubredditsComponent} from "./subreddit/list-subreddits/list-subreddits.component";
import {ViewPostComponent} from "./post/view-post/view-post.component";
import {UserProfileComponent} from "./auth/user-profile/user-profile.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user/:name', component: UserProfileComponent},
  { path: 'list-subreddits', component: ListSubredditsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-subreddit', component: CreateSubredditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
