import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa Validators y FormGroup

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = []; // Arreglo para almacenar las floristerías
  selectedProduct: any; // Floristería seleccionada para edición
  isEditing: boolean = false; // Variable para controlar la edición
  productsForm!: FormGroup; // Define el FormGroup

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProducts();
  }

  // Obtener la lista de floristerías desde el servidor
  getProducts() {
    this.http.get('http://localhost:5000/products')
      .subscribe((data: any) => {
        this.products = data.sort((a: any, b: any) => b.state - a.state);
      });
  }

  // Redirigir a la página de inventario (puedes implementarlo más tarde)
  goToInventory(id: number) {
    // Implementa la redirección a la página de inventario
  }

  // Mostrar el formulario de edición para la floristería seleccionada
  editProducts(product: any) {
    this.selectedProduct = { ...product };
    this.isEditing = true;

    // Inicializar el formulario con los valores de la floristería seleccionada
    this.productsForm = this.formBuilder.group({
      productname: [this.selectedProduct.productname, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      description: [this.selectedProduct.description, Validators.required],
      price: [this.selectedProduct.price, [Validators.required, Validators.pattern('^[0-9]*$')]],
      state: [this.selectedProduct.state, Validators.required],
    });
  }

  // Guardar los cambios en la floristería
  saveChanges() {
    if (this.selectedProduct && this.productsForm.valid) {
      // Actualizar los valores de la floristería seleccionada con los del formulario
      this.selectedProduct = { ...this.selectedProduct, ...this.productsForm.value };
      
      this.http.put(`http://localhost:5000/products/update/id/${this.selectedProduct.productid}`, this.selectedProduct)
        .subscribe((data: any) => {
          // Actualizar la lista de floristerías después de la edición
          this.getProducts();
          this.selectedProduct = null;
          this.isEditing = false;
        });
    }
  }

  // Cancelar la edición y volver a la lista
  cancelEdit() {
    this.selectedProduct = null;
    this.isEditing = false;
  }
}
