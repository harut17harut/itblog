import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckformService {

  constructor() { }
  checkName(name){
    if(name=="")
    return false;
    else
      return true;
    
  }
  checkLogin(login){
    if(login=="")
    return false;
    else
      return true;
    
  }
  checkEmail(email){
    if(email=="")
    return false;
    else
      return true;
    
  }
  checkPassword(password){
    if(password=="")
    return false;
    else
      return true;
    
  }
}
