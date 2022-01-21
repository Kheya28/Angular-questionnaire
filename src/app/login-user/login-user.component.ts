import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent implements OnInit {
  hide=true;
  loginForm : FormGroup;
  constructor(private router: Router,
    ) { }

  ngOnInit()
  {
    this.loginForm=new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
      }
    );
  }
  onLogin()
  {
    this.router.navigate(['question-builder']);

  }
  

}


