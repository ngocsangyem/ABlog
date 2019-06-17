import { Injectable, Injector } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest
} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
	constructor(private injector: Injector) {}
	intercept(req: HttpRequest<any>, next: HttpHandler) {
		let authService = this.injector.get(AuthService);
		let tokenReq = req.clone({
			setHeaders: {
				Authorization: `Bearer ${authService.getToken()}`
			}
		});
		return next.handle(tokenReq);
	}
}
