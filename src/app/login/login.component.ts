import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../Models/User-Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router:Router, private userService: UserService, private Aunten: AuthenticationService) { }

  user = new User()

  ngOnInit() {
  }

  onSubmit() {
  
    // Calls service to login user to the api rest
    this.Aunten.login(this.user.username, this.user.password)
    .subscribe(
      res => {       
        this.Router.navigateByUrl('home')
      },
      error => {
        console.error(error);

      },
    );

  }

  navigate() {    
    this.Router.navigateByUrl('/login');
  }

CrearCuenta() {
  this.Router.navigateByUrl('/register')
}
}
