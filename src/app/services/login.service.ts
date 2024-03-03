import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


 userInfo = {
    username: "ahmmuh",
    password:"snow2024"

  };

  constructor() { }




  login(user:string, password: string){
    user = this.userInfo.username;
    password = this.userInfo.password;
  }
}
