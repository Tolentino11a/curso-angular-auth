import { Component, OnInit } from '@angular/core';

import { DataSourceUser } from './data-source';
import { UsersService } from '@services/users.service';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];
  $user = this.authService.user$ ;
  randomAvatar = Math.random();
  urlAvatar = "https://avatars.dicebear.com/api/adventurer/"+this.randomAvatar+".svg";
  randomAvatar2 = Math.random();
  urlAvatar2 = "https://avatars.dicebear.com/api/adventurer/"+this.randomAvatar2+".svg";
  randomAvatar3 = Math.random();
  urlAvatar3 = "https://avatars.dicebear.com/api/adventurer/"+this.randomAvatar3+".svg";

  constructor(private userService: UsersService,
    private authService: AuthService) {}

  
  ngOnInit(): void {
    this.userService.get()
    .subscribe(users => {
      this.dataSource.init(users);
    });
  }

}
