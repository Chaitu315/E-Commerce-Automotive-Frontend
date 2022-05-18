import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient : HttpClient) { }

  isLoggedIn: boolean = false;
  redirectUrl: string = "";
  
  addProductsToDatabase(product:any)
  {
    return this.httpclient.post<any>('http://localhost:8081/api/v1/addProduct',product);
  }

  adminLogin()
  {
    return this.httpclient.get<any>('http://localhost:8082/api/v2/admins');
  }

  deleteProductById(productId:any)
  {
    return this.httpclient.delete<any>('http://localhost:8081/api/v1/product/'+productId);
  }

  updateProductById(data:any, id:any)
  {
    return this.httpclient.put<any>('http://localhost:8081/api/v1/product/'+id,data);
  }

  getCurrentData(productId:any)
  {
    console.log("inside getCurrentData");
    
    
    return this.httpclient.get<any>('http://localhost:8081/api/v1/product/'+productId);
  }

}
