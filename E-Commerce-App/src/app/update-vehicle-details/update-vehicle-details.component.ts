import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Admin-Service/admin.service';
import { UserService } from '../User-Service/user.service';

@Component({
  selector: 'app-update-vehicle-details',
  templateUrl: './update-vehicle-details.component.html',
  styleUrls: ['./update-vehicle-details.component.css']
})
export class UpdateVehicleDetailsComponent implements OnInit {

  constructor(private userService : UserService, private adminService : AdminService, private router : Router) { }

  vehicles : any;

  ngOnInit(): void 
  {
    this.userService.getAllProducts().subscribe((product: any) =>{
      
      this.vehicles = product;
      
      console.log(this.vehicles);

    })
  }

  updateProduct(id:any)
  {
    this.router.navigate(['/Admin/E-commerce/updateProduct/'+id]); 
  }

  deleteProduct(id:any)
  {
    this.adminService.deleteProductById(id).subscribe(response=>{
      window.location.reload();
      alert("Product Deleted Sucessfully ...");
      
    })
  }

}
