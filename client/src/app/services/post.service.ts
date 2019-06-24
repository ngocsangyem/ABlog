import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	private postsUrl = 'http://localhost:3000/posts';
	private putUrl = 'http://localhost:3000/posts/';
	private posts: Post[];

	constructor(private http: HttpClient) {}

	getPostService() {
		return this.http.get<any>(this.postsUrl);
	}

	onAddPost(newPost: Post) {
		const header = new HttpHeaders();
		header.append('Content-Type', 'application/json');
		return this.http.post<any>(this.postsUrl, newPost, { headers: header });
	}

	onUpdatePost(newPost: Post) {
		const header = new HttpHeaders();

		header.append('Content-Type', 'application/json');
		console.log(newPost);

		console.log(this.putUrl + newPost._id);

		return this.http.put<any>(this.putUrl + newPost._id, newPost);
	}
}
