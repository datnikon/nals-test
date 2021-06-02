import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {
  public page = 0;
  public users: User[] = [];
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  public loadNextPage(): void {
    this.page++;
    this.getUsers();
  }

  public loadPreviousPage(): void {
    this.page = this.page > 0 ? this.page - 1 : 0;
    this.getUsers();
  }

  public logOut(): void {
    this.authService.logOut();
  }


  private getUsers(): void {
    this.userService.getUsers(this.page).then((users: User[]) => {
      this.users = users;
    })
  }
}
