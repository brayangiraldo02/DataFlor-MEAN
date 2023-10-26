import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user = {
    username: '',
    password: '',
    fullname: '',
    phone: '',
    role: '',
    idflowershops: 0 // Inicialmente, establece el valor en 0, que se actualizará en la selección.
  };

  flowerShops: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Realiza una solicitud HTTP para obtener la lista de floristerías desde el servidor.
    this.http.get<any[]>('http://localhost:5000/flower-shops').subscribe(data => {
      this.flowerShops = data;
    });
  }

  onSubmit() {
    // Envía los datos del usuario al servidor para crearlo.
    this.http.post('http://localhost:5000/users/create', this.user).subscribe(response => {
      console.log('User created successfully', response);
      this.router.navigate(['/users']);
    });
  }
}
