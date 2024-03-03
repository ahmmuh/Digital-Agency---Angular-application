import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {




  constructor(private router: Router,private loginService: LoginService){}

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })


  login() {
  
    console.log("Logged")

  }



}
