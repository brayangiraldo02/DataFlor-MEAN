import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlowershopsComponent } from './components/flowershops/flowershops.component';
import { CreateFlowershopComponent } from './components/create-flowershop/create-flowershop.component';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { OwnerViewComponent } from './components/owner-view/owner-view.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { WarningComponent } from './components/warning/warning.component';
import { LogOutComponent } from './components/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CarouselComponent,
    LoginComponent,
    HomeComponent,
    FlowershopsComponent,
    CreateFlowershopComponent,
    UsersComponent,
    CreateUserComponent,
    OwnerViewComponent,
    AdminViewComponent,
    WarningComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
