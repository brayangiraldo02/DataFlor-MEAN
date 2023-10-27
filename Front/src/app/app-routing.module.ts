import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlowershopsComponent } from './components/flowershops/flowershops.component';
import { CreateFlowershopComponent } from './components/create-flowershop/create-flowershop.component';
import { UsersComponent } from './components/users/users.component';
import { TokenGuardAdmin } from './guards/admin.guard';
import { TokenGuardOwner } from './guards/owner.guard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {OwnerViewComponent} from './components/owner-view/owner-view.component';
import {MyFlowershopComponent} from './components/my-flowershop/my-flowershop.component';
import {MyEmployeesComponent} from './components/my-employees/my-employees.component';
import {AdminViewComponent} from './components/admin-view/admin-view.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { CreateProviderComponent } from './components/create-provider/create-provider.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flowershops', component: FlowershopsComponent, canActivate: [TokenGuardAdmin] },
  { path: 'flowershop/create', component: CreateFlowershopComponent, canActivate: [TokenGuardAdmin]},
  { path: 'users', component: UsersComponent, canActivate: [TokenGuardAdmin]},
  { path: 'user/create', component: CreateUserComponent, canActivate: [TokenGuardAdmin] },
  { path: 'owner', component: OwnerViewComponent, canActivate: [TokenGuardOwner] },
  { path: 'my-flowershop', component: MyFlowershopComponent, canActivate: [TokenGuardOwner]},
  { path: 'my-employees', component: MyEmployeesComponent, canActivate: [TokenGuardOwner]},
  { path: 'admin', component: AdminViewComponent, canActivate: [TokenGuardAdmin]},
  { path: 'providers', component: ProvidersComponent, canActivate: [TokenGuardAdmin]},
  { path: 'provider', component: CreateProviderComponent, canActivate: [TokenGuardAdmin]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
