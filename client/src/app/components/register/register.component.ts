import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
	registerUserData = {};

	constructor(private auth: AuthService) {}

	ngOnInit() {}

	registerUser() {
		this.auth
			.registerUserService(this.registerUserData)
			.subscribe(res => console.log(res), err => console.log(err));
	}
}
