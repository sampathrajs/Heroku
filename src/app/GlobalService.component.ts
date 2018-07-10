import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators/retry';
@Injectable()
export class GlobalServices{
   
      // public SetLoginData(user:UserLoginData):void
      // {
      //     localStorage.setItem("Login",JSON.stringify(user));
      // }
      // public GetValueFromLocalStorage():UserLoginData{
      //     let signindata=JSON.parse(localStorage.getItem("Login"));
      //     return signindata==null?null:signindata;
      // }

      public getUserName(): string{
        let userName = (localStorage.getItem("UserName"));

        if(userName == "null")
        {
          userName = null;
        }

console.log("getUserName->UserNameStr: " +  userName);

        return userName;
      }

      public setUserName(userName:string){
        localStorage.setItem("UserName", userName);

        console.log("setUserName->UserNameStr: " +  userName);
      }
}