import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlowershopsComponent } from './components/flowershops/flowershops.component';
import { CreateFlowershopComponent } from './components/create-flowershop/create-flowershop.component';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flowershops', component: FlowershopsComponent },
  { path: 'flowershop/create', component: CreateFlowershopComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/create', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
