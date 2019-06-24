import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
	toggleForm = false;
	title: string;
	description: string;
	image: string;
	posts: Post[] = [];

	constructor(private postService: PostService, private auth: AuthService) {}

	ngOnInit() {
		this.postService
			.getPostService()
			.subscribe(res => (this.posts = res), err => console.log(err));
	}

	private getPostDate(): string {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	}

	openAddPostForm() {
		this.toggleForm = !this.toggleForm;
	}

	onAddPost(post: Post) {
		this.postService.onAddPost(post).subscribe(newPost => {
			this.posts.push(newPost);
		});
	}

	onUpdatePost(post: Post) {
		this.postService
			.onUpdatePost(post)
			.subscribe(postUpdated => console.log(postUpdated));
	}
}
