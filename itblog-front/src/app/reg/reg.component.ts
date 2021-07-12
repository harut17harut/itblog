import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckformService } from '../checkform.service';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessage } from 'angular2-flash-messages/module/flash-message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  profileForm = new FormGroup({
name: new FormControl(''),
login: new FormControl(''),
email: new FormControl(''),
password: new FormControl('')
  });
  constructor(private checkForm:CheckformService,
    private router:Router,
    private authService:AuthService,
     private flashMessages: FlashMessagesService){}
RegUser(){
  var user = this.profileForm.value;


if(!this.checkForm.checkName(user['name'])){
  this.flashMessages.show("please fill name field",{
    cssClass:"alert-danger",
    timeout:4000
  });
//console.log("please fill name field");
return false;
}else if(!this.checkForm.checkLogin(user['login'])){
  this.flashMessages.show("please fill login field",{
    cssClass:"alert-danger",
    timeout:4000
  });
 // console.log("please fill login field");
  return false;
}
else if(!this.checkForm.checkEmail(user['email'])){
  this.flashMessages.show("please email name field",{
    cssClass:"alert-danger",
    timeout:4000
  });
  //console.log("please fill email field");
  return false;
}
else if(!this.checkForm.checkPassword(user['password'])){
  this.flashMessages.show("please email name field",{
    cssClass:"alert-danger",
    timeout:4000
  });
  console.log("please fill password field");
  return false;
}else{


  this.authService.registerUser(user).subscribe(data=>{
    if(!data.success){
      this.flashMessages.show(data.message,{
        cssClass:"alert-danger",
        timeout:4000
      });
      this.router.navigate(['/reg']);
    }else{
      this.flashMessages.show(data.message,{
        cssClass:"alert-success",
        timeout:4000
      });
      this.router.navigate(['/auth']);
    }
  });
  return true;
}

}
}
