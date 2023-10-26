import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlowershopsComponent } from './components/flowershops/flowershops.component';
import { CreateFlowershopComponent } from './components/create-flowershop/create-flowershop.component';
import { UsersComponent } from './components/users/users.component';
import { TokenGuardAdmin } from './guards/admin.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flowershops', component: FlowershopsComponent },
  { path: 'flowershop/create', component: CreateFlowershopComponent, canActivate: [TokenGuardAdmin]},
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
