import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupRequestPayload} from "./sign-up-request.payload";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  signupRequestPayload: SignupRequestPayload;

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signup() {
    this.signupRequestPayload.username = this.signUpForm.get('username')?.value;
    this.signupRequestPayload.email = this.signUpForm.get('email')?.value;
    this.signupRequestPayload.password = this.signUpForm.get('password')?.value;

    this.authService.signup(this.signupRequestPayload)
      .subscribe(
        res => this.router.navigate(['/login'], { queryParams: { registered: 'true' } }),
        err => this.toastr.error('Registration failed! Please try again.')
      );
  }

}
