import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public isLoggedIn: boolean = false;
  public isLoggedInAdmin: boolean = false;
  public showNavbar:boolean = false; //Se crea un bool para el navbar.
  public logo:string = '../../../assets/all/img/dataflor3.png'; //Se crea una variable para el logo.
  public username:string = ''

  constructor (private router: Router) { }

  public logoutPress(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  //Función para mostrar el navbar responsive.
  public toggleNavbar(): void {
    //Se define valor a mostrar: solo true o false.
    this.showNavbar = !this.showNavbar;
    //Mostrar en consola el valor seleccionado.
    console.log(this.showNavbar);
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }
}
