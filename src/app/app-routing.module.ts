import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'userPosts', component: UserPostsComponent},
  { path: '', redirectTo: '/userPosts', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
