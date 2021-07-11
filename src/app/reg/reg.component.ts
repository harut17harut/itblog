import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckformService } from '../checkform.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessage } from 'angular2-flash-messages/module/flash-message';
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
  return false;
}
}
}
