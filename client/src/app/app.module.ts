import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { EditComponent } from './components/posts/post/edit/edit.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptorService } from './services/token-auth.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		PostsComponent,
		PostComponent,
		EditComponent,
		RegisterComponent,
		LoginComponent,
		OrderByDatePipe
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
