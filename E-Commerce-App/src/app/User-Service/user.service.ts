import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient : HttpClient) { }

  isLoggedIn: boolean = false;
  redirectUrl: string = "";


  jsondata : String = 'http://localhost:3000/cartDetails';

  userRegister(user:any)
  {
    return this.httpclient.post<any>('http://localhost:8082/api/v2/user',user);
  }

  userLogin()
  {
    console.log("inside userLogin()");
    
    return this.httpclient.get<any>('http://localhost:8082/api/v2/users');
  }

  products :any = [];

  getAllProducts()
  {
    this.products = this.httpclient.get<any>('http://localhost:8081/api/v1/products');
    return this.products;
  }

  addProductToCart(VehicleData:any)
  {
    this.httpclient.post<any>('http://localhost:3000/cartDetails',VehicleData).subscribe(response=>{
      alert("Saved In Cart ...")
    })
  }

  getProductsInCart()
  {
    return this.httpclient.get<any>('http://localhost:3000/cartDetails');
  }

  deleteProduct(productId:any)
  {
    const url = `${this.jsondata}/${productId}`; 
    window.location.reload();
    return this.httpclient.delete(url) 
  }

}

