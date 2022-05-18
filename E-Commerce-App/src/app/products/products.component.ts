import { Component,OnInit } from '@angular/core';
import { UserService } from '../User-Service/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private userService : UserService) { }

  vehicles : any;

 
  
  ngOnInit(): void
  {
    this.userService.getAllProducts().subscribe((product: any) =>{
      
      this.vehicles = product;
      
      console.log(this.vehicles);

    })
  }

  result : number = 0;

  addToCart(data:any)
  {
    this.userService.getProductsInCart().subscribe((vehicle:any)=>{

      for (let index = 0; index < vehicle.length; index++) {
        const element = vehicle[index];
  
        if(data.vehicleId == element.vehicleId)
        {
          this.result = 1
        }
  
      }
  
      if (this.result ==0) 
      {
        console.log(data);
        this.userService.addProductToCart(data);
      }
      else
      {
        console.log(this.result);
        
        alert("Item Already Added in Cart ...");
      }
    })
    
  }

}
