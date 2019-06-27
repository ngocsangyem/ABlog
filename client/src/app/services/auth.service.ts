import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	// back-end Url
	private registerUrl = 'api/users/register';
	private loginUrl = 'api/users/login';

	constructor(private http: HttpClient, private router: Router) {}

	registerUserService(user) {
		/**
		 * @param: back-end url
		 * @param: user object
		 * return Observable
		 */
		return this.http.post<any>(this.registerUrl, user);
	}

	loginUserService(user) {
		/**
		 * @param: back-end url
		 * @param: user object
		 * return Observable
		 */
		return this.http.post<any>(this.loginUrl, user);
	}

	logged() {
		// if true return true else false return false
		return !!localStorage.getItem('token');
	}

	getToken() {
		return localStorage.getItem('token');
	}

	logoutUser() {
		localStorage.removeItem('token');
		this.router.navigate(['/posts']);
	}
}
