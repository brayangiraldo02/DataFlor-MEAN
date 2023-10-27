import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'] // Agrega el archivo CSS si lo tienes
})
export class ProvidersComponent implements OnInit {
  providers: any[] = []; // Arreglo para almacenar las floristerías
  selectedProviders: any; // Floristería seleccionada para edición
  isEditing: boolean = false; // Variable para controlar la edición

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProviders();
  }

  // Obtener la lista de floristerías desde el servidor
  getProviders() {
    this.http.get('http://localhost:5000/providers')
      .subscribe((data: any) => {
        this.providers = data.sort((a: any, b: any) => b.state - a.state);
      });
  }

  // Mostrar el formulario de edición para la floristería seleccionada
  editProviders(providers: any) {
    this.selectedProviders = { ...providers };
    this.isEditing = true;
  }

  // Guardar los cambios en la floristería
  saveChanges() {
    if (this.selectedProviders) {
      this.http.put(`http://localhost:5000/flower-shops/update/id/${this.selectedProviders.providerid}`, this.selectedProviders)
        .subscribe((data: any) => {
          // Actualizar la lista de floristerías después de la edición
          this.getProviders();
          this.selectedProviders = null;
          this.isEditing = false;
        });
    }
  }

  // Cancelar la edición y volver a la lista
  cancelEdit() {
    this.selectedProviders = null;
    this.isEditing = false;
  }
}
