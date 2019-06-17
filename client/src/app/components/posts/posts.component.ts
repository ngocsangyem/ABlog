import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
	posts: Post[] = [];

	constructor(private postService: PostService) {}

	ngOnInit() {
		this.postService
			.getPostService()
			.subscribe(res => (this.posts = res), err => console.log(err));
	}
}
