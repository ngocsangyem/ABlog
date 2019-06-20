import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-post',
	templateUrl: './add-post.component.html',
	styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent implements OnInit {
	constructor(private postService: PostService, private router: Router) {}

	ngOnInit() {}
}
