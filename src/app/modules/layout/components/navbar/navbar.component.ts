import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent  {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;
  randomAvatar = Math.random();
  $user = this.authService.user$ ;
  urlAvatar = "https://avatars.dicebear.com/api/adventurer/"+this.randomAvatar+".svg";

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

  constructor(private authService: AuthService,
    private router: Router,
    private tokenService: TokenService) {}
  

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  isValidToken(){
    console.log(this.tokenService.isValidToken());
  }
}
