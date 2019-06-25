import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	private postsUrl = 'post-list';
	private actionUrl = 'post-list/';
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
		return this.http.put<any>(this.actionUrl + newPost._id, newPost);
	}

	onDeletePost(post: Post) {
		return this.http.delete<any>(this.actionUrl + post._id);
	}
}
