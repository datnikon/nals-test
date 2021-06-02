import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.authService.getAuthorizationToken();
        if (authToken) {
            const authReq = req.clone({
                setHeaders: { Authorization: `Bear ${authToken}` },
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
