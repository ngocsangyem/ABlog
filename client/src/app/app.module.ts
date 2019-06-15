import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from "./components/posts/post/post.component";
import { EditComponent } from "./components/posts/post/edit/edit.component";
import { RegisterComponent } from "./components/header/register/register.component";
import { LoginComponent } from "./components/header/login/login.component";
import { AppRoutingModule } from "./app.routing";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		PostsComponent,
		PostComponent,
		EditComponent,
		RegisterComponent,
		LoginComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
