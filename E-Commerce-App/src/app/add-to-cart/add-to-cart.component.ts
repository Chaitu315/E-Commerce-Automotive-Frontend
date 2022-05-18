import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User-Service/user.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  cartData : any;

  ngOnInit(): void 
  {
    this.userService.getProductsInCart().subscribe(data=>{
        this.cartData = data;
    })
  }

  deleteFromCart(id:any)
  {
    this.userService.deleteProduct(id).subscribe(response=>{
      alert("Item Deleted From Cart ...");
      this.router.navigate(['/User/E-commerce/Add-To-Cart']);
    })
  }
 

}
