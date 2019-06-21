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
		let date = new Date();
		let day = date.getDay();
		let month = date.getMonth();
		let year = date.getFullYear();

		return `${day}/${month}/${year}`;
	}

	openAddPostForm() {
		this.toggleForm = !this.toggleForm;
	}

	addPost(event) {
		let newPost: Post = {
			title: this.title,
			image: this.image,
			description: this.description,
			createDate: this.getPostDate()
		};
		this.postService.onAddPost(newPost).subscribe(post => {
			this.posts.unshift(post);
			this.title = '';
			this.description = '';
			this.image = '';
		});
	}
}
