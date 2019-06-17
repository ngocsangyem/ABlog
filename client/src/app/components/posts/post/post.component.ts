import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post.model';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
	@Input() post: Post;
	constructor() {}

	ngOnInit() {}
}
