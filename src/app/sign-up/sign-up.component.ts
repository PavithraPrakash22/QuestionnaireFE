import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {UserService} from '../Services/user.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  item:User;
  list:User[];
  msg:string;
  //registerForm: FormGroup;
  submitted = false;
  confirmpassword:string
  email;
  // firstname = new FormControl('', [
  //   Validators.required
  // ]);
  // lastname = new FormControl('', [
  //   Validators.required
  // ]);
  // password = new FormControl('', [
  //   Validators.required
  // ]);
  // repeatpassword = new FormControl('', [
  //   Validators.required
  // ]);
  // email= new FormControl('', [
  //   Validators.required,
  //   Validators.email
  // ]);
  // mobileno = new FormControl('', [
  //   Validators.required,
  // ]);
  constructor(private _service:UserService,private router:Router) {  
    this.item = new User();
  }
  

  ngOnInit(): void {
  //   this.registerForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
  //     mobileno:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
  //     confirmpassword:['',[Validators.required]]
  // });
  }
   MustMatch() {
    if(this.item.userPassword == this.confirmpassword)
    {
      return false;
    }
    else
    {
      return true;
    }
        
    }


Add()
{
  this.submitted = true;
  // if (this.registerForm.invalid) {
  //   return;
// }
  console.log("11111111");
  this.item.userResponseCount=0;
  console.log(this.item);
  this._service.AddUser(this.item).subscribe(k=>this.msg=k);
    this.router.navigate(['signin']);
}
}
