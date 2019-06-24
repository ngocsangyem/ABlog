import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
	editToggle = false;
	@Input() post: Post;
	@Output() updatePostEvent: EventEmitter<Post> = new EventEmitter<Post>();
	@Output() deletePostEvent: EventEmitter<Post> = new EventEmitter<Post>();
	constructor(private auth: AuthService) {}

	ngOnInit() {}

	editPostBtn() {
		this.editToggle = true;
	}

	updatePost() {
		this.updatePostEvent.emit(this.post);
		this.editToggle = false;
	}

	deletePost() {
		this.deletePostEvent.emit(this.post);
	}
}
