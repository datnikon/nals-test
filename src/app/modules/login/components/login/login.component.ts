import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userName = '';
  public password = '';
  constructor(private authService: AuthService, private router: Router) { }

  public login(): void {
    if (this.userName.length > 0 && this.password.length > 0) {
      this.authService.login(this.userName, this.password).then(() => {
        this.router.navigateByUrl("/");
      });
    }
  }

}
