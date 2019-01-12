import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';

@Injectable()
export class OnlyLoggedInUsersGuardService {

  constructor(private UserServiceService:UserServiceService,private Router:Router) { }

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.UserServiceService.isLoggedIn()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      this.Router.navigate(['/home/login'])
      return false;
    }
  }
}
