import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email:string;
  password:string;
  msg:string;

   constructor(private http:HttpClient,private router:Router,private _service:UserService) { }
 
   ngOnInit(): void {
   }
   Signin()
   {
     this._service.Login(this.email,this.password).subscribe(data=>{
       console.log(data)
       if(data.userName!="Invalid User")
       {
         console.log("HAHAHAHHAHAHA");
         localStorage.setItem('username',data.userName);
         localStorage.setItem('userid',data.userId);
         localStorage.setItem('token',data.token);
         localStorage.setItem('userresponse',data.userResponse);
         this.router.navigate(['test']);
       }
       else
       {
         this.msg="Please Enter Valid Username and password";
        console.log("Nothing found");
       }
 
     },
     err=>{
        console.log("subscribe err");
     });
   }
}
