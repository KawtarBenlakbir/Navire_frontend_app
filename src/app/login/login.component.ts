import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   formLogin!: FormGroup;
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authService: AuthService,private fb : FormBuilder , private router : Router ) {}

  ngOnInit(): void {
    this.formLogin=this.fb.group({
    username : this.fb.control(""),
    password : this.fb.control("")
  })
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password
this.authService.login(username,pwd).subscribe({
  next :  data =>{
    this.authService.loadProfile(data);
    this.router.navigateByUrl("/admin/Affectation")
    },
  error : err => {
    this.invalidLogin = true;
    this.loginSuccess = false;
  }
  }
)
  }

}
