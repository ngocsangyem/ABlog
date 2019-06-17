import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post.model';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	private postsUrl = 'http://localhost:3000/article/posts';
	private posts: Post[];

	constructor(private http: HttpClient) {}

	getPostService() {
		return this.http.get<any>(this.postsUrl);
	}
}
