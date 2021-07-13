import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,
    private authservice:AuthService,
     private flashMessages: FlashMessagesService){ }

  ngOnInit(): void {
  }

logoutUser(){
  

this.authservice.logout();
this.flashMessages.show("you logged out",{
  cssClass:"alert alert-warning",
  timeout:4000
});
this.router.navigate(['auth']);

return false;
}
}
