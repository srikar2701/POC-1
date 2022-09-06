import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './Services/sign-up.service';



@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  title: any;
  
  constructor(private formBuilder: FormBuilder,private transfer: SignUpService) {}
  

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required,Validators.pattern(/^((?=[^a-z]*[a-z]))(?=[^A-Z]*[A-Z]).{8,30}$/)]]
      
      },
  
    );
  }

  get f() {
    return this.signUpForm.controls;
  }
  
  onSubmit() {
    this.transfer.SignUp(this.signUpForm.value).subscribe(sign=>console.log(sign));
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.signUpForm.reset();
  }
}
