import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Define el array de usuarios
  editingUser: any; // Almacena el usuario que se está editando

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llama a la API para obtener la lista de usuarios al iniciar el componente
    this.http.get('http://localhost:5000/users').subscribe((data: any) => {
      this.users = data;
    });
  }

  editUser(user: any) {
    // Al hacer clic en el botón de editar, muestra el formulario de edición
    this.editingUser = { ...user };
  }

  updateUser() {
    // Realiza la solicitud al backend para actualizar el usuario
    this.http.put(`http://localhost:5000/users/update/id/${this.editingUser.userid}`, this.editingUser)
      .subscribe((response: any) => {
        if (response.message === "User updated successfully") {
          // Actualiza la lista de usuarios con los cambios
          const index = this.users.findIndex(user => user.id === this.editingUser.id);
          this.users[index] = { ...this.editingUser };
          this.editingUser = null; // Cierra el formulario de edición
          this.ngOnInit(); // Actualiza la lista de usuarios
        }
      });
  }

  cancelEdit() {
    this.editingUser = null; // Cierra el formulario de edición
    this.ngOnInit(); // Actualiza la lista de usuarios
  }
}
