import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.authService.isLogged()) {
      this.router.navigateByUrl('/login');
      console.log("AA");
      return false;
    } else {
      return true;
    }
  }

}
