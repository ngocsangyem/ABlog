import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	private postsUrl = 'http://localhost:3000/posts';
	private posts: Post[];

	constructor(private http: HttpClient) {}

	getPostService() {
		return this.http.get<any>(this.postsUrl);
	}

	onAddPost(newPost) {
		const header = new HttpHeaders();
		console.log(newPost);

		header.append('Content-Type', 'application/json');
		return this.http.post<any>(this.postsUrl, newPost);
	}
}
