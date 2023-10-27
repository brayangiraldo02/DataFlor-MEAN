import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlowershopsComponent } from './components/flowershops/flowershops.component';
import { CreateFlowershopComponent } from './components/create-flowershop/create-flowershop.component';
import { UsersComponent } from './components/users/users.component';
import { TokenGuardAdmin } from './guards/admin.guard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {OwnerViewComponent} from './components/owner-view/owner-view.component';
import {MyFlowershopComponent} from './components/my-flowershop/my-flowershop.component';
import {AdminViewComponent} from './components/admin-view/admin-view.component';
import {WarningComponent} from './components/warning/warning.component';
import { LogOutComponent } from './components/log-out/log-out.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flowershops', component: FlowershopsComponent, canActivate: [TokenGuardAdmin] },
  { path: 'flowershop/create', component: CreateFlowershopComponent, canActivate: [TokenGuardAdmin]},
  { path: 'users', component: UsersComponent, canActivate: [TokenGuardAdmin]},
  { path: 'user/create', component: CreateUserComponent, canActivate: [TokenGuardAdmin] },
  { path: 'owner', component: OwnerViewComponent },
  { path: 'admin', component: AdminViewComponent, canActivate: [TokenGuardAdmin] },
  { path: 'warning', component: WarningComponent},
  { path: 'logout', component: LogOutComponent}
  { path: 'my-flowershop', component: MyFlowershopComponent },
  { path: 'admin', component: AdminViewComponent, canActivate: [TokenGuardAdmin] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
