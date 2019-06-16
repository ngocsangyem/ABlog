import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	loginUserData = {};
	constructor() {}

	ngOnInit() {}

	loginUser() {
		console.log(this.loginUserData);
	}
}
