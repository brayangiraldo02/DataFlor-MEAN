import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css']
})
export class CreateProviderComponent {
  provider: any = {
    fullname: '',
    address: '',
    phone: ''
  };
  
  constructor(private http: HttpClient, private router: Router) {}

  // Método para enviar los datos al backend y crear un proveedor.
  createProvider() {
    this.http.post('http://localhost:5000/providers/create', this.provider)
      .subscribe(
        (data: any) => {
          // Manejar respuesta del servidor si es exitosa.
          alert('Proveedor creado exitosamente');
          this.router.navigate(['/providers']);
        },
        (error) => {
          // Manejar error del servidor.
          alert('Error al crear el proveedor');
        }
      );
  }
}
