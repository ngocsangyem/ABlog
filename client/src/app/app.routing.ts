import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	// { path: '', redirectTo: 'posts', pathMatch: 'full' },
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'posts',
		component: PostsComponent
	},
	{
		path: 'add-post',
		component: AddPostComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
