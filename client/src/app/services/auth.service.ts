import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	// back-end Url
	private registerUrl = 'http://localhost:3000/users/register';

	constructor(private http: HttpClient) {}

	registerUserService(user) {
		/**
		 * @param: back-end url
		 * @param: user object
		 */
		return this.http.post<any>(this.registerUrl, user);
	}
}
