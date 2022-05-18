import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { AdminAuthenticationComponent } from './admin-authentication/admin-authentication.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateVehicleDetailsComponent } from './update-vehicle-details/update-vehicle-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UserAuthenticationComponent,
    AdminAuthenticationComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserNavigationComponent,
    AdminNavigationComponent,
    AddToCartComponent,
    AddProductComponent,
    UpdateVehicleDetailsComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
 
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
