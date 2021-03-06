import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	loginUserData = {};

	constructor(private auth: AuthService, private router: Router) {}

	ngOnInit() {}

	loginUser() {
		this.auth.loginUserService(this.loginUserData).subscribe(
			res => {
				// console.log(res);
				localStorage.setItem('token', res.token);
				this.router.navigate(['/posts']);
			},
			err => console.log(err)
		);
	}
}
