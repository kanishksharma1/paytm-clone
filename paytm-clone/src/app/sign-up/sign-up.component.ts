import { Component } from '@angular/core';
import { signup } from '../models/signup.model';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(private authservice : AuthService){}

  RegisterForm = new FormGroup({
    Name: new FormControl(Validators.required),
    Email: new FormControl(Validators.required, Validators.email),
    Password: new FormControl(Validators.required, Validators.min(10)),
    ConfirmPassword: new FormControl(Validators.required, Validators.min(10))
  })

  signupDetails : signup = {
    Name : "",
    Email : "",
    Password : "",
    ConfirmPassword : ""
  }

addSignupData(){
  this.authservice.signupData(this.signupDetails).subscribe({
    next: (signup) =>{
      console.log(signup);
    }
  })
}


}
