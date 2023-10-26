import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flowershops',
  templateUrl: './flowershops.component.html',
  styleUrls: ['./flowershops.component.css'] // Agrega el archivo CSS si lo tienes
})
export class FlowershopsComponent implements OnInit {
  flowerShops: any[] = []; // Arreglo para almacenar las floristerías
  selectedFlowerShop: any; // Floristería seleccionada para edición
  isEditing: boolean = false; // Variable para controlar la edición

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFlowerShops();
  }

  // Obtener la lista de floristerías desde el servidor
  getFlowerShops() {
    this.http.get('http://localhost:5000/flower-shops')
      .subscribe((data: any) => {
        this.flowerShops = data.sort((a: any, b: any) => b.state - a.state);
      });
  }

  // Redirigir a la página de inventario (puedes implementarlo más tarde)
  goToInventory(id: number) {
    // Implementa la redirección a la página de inventario
  }

  // Mostrar el formulario de edición para la floristería seleccionada
  editFlowerShop(flowerShop: any) {
    this.selectedFlowerShop = { ...flowerShop };
    this.isEditing = true;
  }

  // Guardar los cambios en la floristería
  saveChanges() {
    if (this.selectedFlowerShop) {
      this.http.put(`http://localhost:5000/flower-shops/update/id/${this.selectedFlowerShop.idflowershops}`, this.selectedFlowerShop)
        .subscribe((data: any) => {
          // Actualizar la lista de floristerías después de la edición
          this.getFlowerShops();
          this.selectedFlowerShop = null;
          this.isEditing = false;
        });
    }
  }

  // Cancelar la edición y volver a la lista
  cancelEdit() {
    this.selectedFlowerShop = null;
    this.isEditing = false;
  }
}
