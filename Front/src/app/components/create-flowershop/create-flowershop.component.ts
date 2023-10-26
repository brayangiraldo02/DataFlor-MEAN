import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flowershop',
  templateUrl: './create-flowershop.component.html',
  styleUrls: ['./create-flowershop.component.css']
})
export class CreateFlowershopComponent {
  flowerShop: any = {
    fullname: '',
    address: '',
    phone: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  // Método para enviar los datos al backend y crear una floristería.
  createFlowerShop() {
    this.http.post('http://localhost:5000/flower-shops/create', this.flowerShop)
      .subscribe(
        (data: any) => {
          // Manejar respuesta del servidor si es exitosa.
          alert('Floristería creada exitosamente');
          this.router.navigate(['/flowershops']);
        },
        (error) => {
          // Manejar error del servidor.
          alert('Error al crear la floristería');
        }
      );
  }
}
