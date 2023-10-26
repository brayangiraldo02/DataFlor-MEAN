import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  public logo:string = '../../../assets/nav/img/dataflor.png'; //Se crea una variable para el logo.

  login(): void {

  } 
}
