import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	// back-end Url
	private registerUrl = 'http://localhost:3000/users/register';
	private loginUrl = 'http://localhost:3000/users/login';

	constructor(private http: HttpClient) {}

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
}
