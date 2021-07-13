import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router:Router,
    private authservice:AuthService,
     private flashMessages: FlashMessagesService) { }

     profileForm = new FormGroup({
     
      login: new FormControl(''),
      password: new FormControl('')
        });
  ngOnInit(): void {
  }
AuthUser(){
  var user = this.profileForm.value;
if(user["password"]==""){
    this.flashMessages.show("please fill password field",{
      cssClass:"alert-danger",
      timeOut:4000
    });
  }else{
    
  this.authservice.AuthUser(user).subscribe(data=>{
    
if(!data.success){
  
  this.flashMessages.show("passwords dont match",{
    cssClass:"alert-danger",
    timeout:4000
  });
}else{
  
  
  this.router.navigate(['dashboard']);
  this.authservice.StoreUser(data.token,data.user);
  this.flashMessages.show("you sucesfully authorized",{
    cssClass:"alert-success",
    timeout:4000
  });
}
  });
}
}
}
