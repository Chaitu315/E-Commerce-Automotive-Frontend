import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AdminAuthenticationComponent } from './admin-authentication/admin-authentication.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminGuard } from './AdminGuard/admin.guard';
import { ProductsComponent } from './products/products.component';
import { UpdateVehicleDetailsComponent } from './update-vehicle-details/update-vehicle-details.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserGuard } from './UserGuard/user.guard';


const routes: Routes = [
  {
    path : "User-Authentication",
    component : UserAuthenticationComponent,
    children : [
      {
        path : "",
        component : UserLoginComponent,
      },
      {
        path : "Registration",
        component : UserRegistrationComponent,
      },
      {
        path : "Login",
        component : UserLoginComponent,
      }
    ]
  },
  {
    path : "User/E-commerce",
    canActivate :[UserGuard],
    component : UserNavigationComponent,
    children : [
      {
        path : "",
        component : ProductsComponent,
        // children : [
        //   {
        //     path : "Product/:vehicleId",
        //     component : AddToCartComponent
        //   }
        // ]
        
      },
      {
        path : "Products",
        component : ProductsComponent,
        // children : [
        //   {
        //     path : "Product/:vehicleId",
        //     component : AddToCartComponent
        //   }
        // ]
      },
      {
        path : "Add-To-Cart",
        component : AddToCartComponent
      }
    ]
  },
  {
    path:"Admin/E-commerce",
    canActivate : [AdminGuard],
    component : AdminNavigationComponent,
    children : [
      {
        path : "",
        component : UpdateVehicleDetailsComponent,
      },
      {
        path : "AddProduct",
        component : AddProductComponent,
      },
      {
        path : "Products",
        component : UpdateVehicleDetailsComponent,
      },
      {
        path : "updateProduct/:vehicleId",
        component : AddProductComponent,
      }
    ]
  },
  {
    path : "Admin-Authentication",
    component : AdminAuthenticationComponent,
    children : [
      {
        path : "Login",
        component : AdminLoginComponent,
      }
    ]
  },
  {
    path: "",
    redirectTo: "User-Authentication",
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
