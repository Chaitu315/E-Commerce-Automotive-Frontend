import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Admin-Service/admin.service';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../User-Service/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private userService : UserService, private adminService : AdminService, private router : Router, private activatedRoute : ActivatedRoute) { }

  productDetailsForm : any;

  
  ngOnInit(): void 
  {
    //FormGroup is used with FormControl to track the value and validate the state of form control. 
    //It aggregates the values of each child FormControl into a single object
    //It calculates its status by reducing the status values of its children so that if one control in a group is invalid, the entire group is rendered invalid.

    //FormControl is a class in Angular that tracks the value and validation status of an individual form control
    this.productDetailsForm = new FormGroup({
      vehicleId: new FormControl('',[Validators.required]),
      vehicleBrandName : new FormControl('',[Validators.required]),
      vehicleModel : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      noOfSeats : new FormControl('',[Validators.required]),
      fuelType : new FormControl('',[Validators.required]),
      transmissionType : new FormControl('',[Validators.required]),
      engineType : new FormControl('',[Validators.required]),
      dimensions : new FormControl('',[Validators.required])
    })
    
    //ActivatedRoute contains the information about a route associated with a component loaded into an router-outlet
    //It can also be used to pass data from one component to another component using route such as Id
    this.activatedRoute.paramMap.subscribe(params => {
      console.log("params"); 
      
      console.log(params);
      
      const productId = params.get('vehicleId');
      console.log(productId);
      
      if(productId)
      {
        console.log("inside if");
        
        this.getVehicleData(productId);
      }
    })
  }

    get vehicleId() { return this.productDetailsForm.controls['vehicleId']};
    get vehicleBrandName() { return this.productDetailsForm.controls['vehicleBrandName']};
    get vehicleModel() { return this.productDetailsForm.controls['vehicleModel']};
    get price() { return this.productDetailsForm.controls['price']};
    get noOfSeats() { return this.productDetailsForm.controls['noOfSeats']};
    get fuelType() { return this.productDetailsForm.controls['fuelType']};
    get transmissionType() { return this.productDetailsForm.controls['transmissionType']};
    get engineType() { return this.productDetailsForm.controls['engineType']};
    get dimensions() { return this.productDetailsForm.controls['dimensions']};

  getVehicleData(id :any)
  {
    console.log("inside getVehicleData()");
    
    this.adminService.getCurrentData(id).subscribe(productData =>{
      console.log("subscribed");
      
      console.log(productData);
      
      return this.editProduct(productData);
    })
  }

  editProduct(vehicle:any)
  {
    console.log("inside editProduct");
    console.log(vehicle);
    
    for (let index = 0; index < vehicle.length; index++) 
    {
      const element = vehicle[index];
      
      // The patchValue accepts the object with control names as keys.
      this.productDetailsForm.patchValue({
        vehicleId: element.vehicleId,
        vehicleBrandName : element.vehicleBrandName,
        vehicleModel : element.vehicleModel,
        price : element.price,
        noOfSeats : element.noOfSeats,
        fuelType : element.fuelType,
        transmissionType : element.transmissionType,
        engineType : element.engineType,
        dimensions : element.dimensions
      })
      
    }

  }

  //result : number = 0;

  addProduct()
  {
    this.adminService.addProductsToDatabase(this.productDetailsForm.value).subscribe(response => {
      alert("Product Added Sucessfully ...");

      this.router.navigate(['/Admin/E-commerce/Products']);
    })
         
  }

  updateProduct(product:any,productId:any)
  {
    console.log("update");
    console.log(product);
    console.log(productId);
    this.adminService.updateProductById(product,productId).subscribe(()=> {
      alert("updated Sucessfully ...");
      this.router.navigate(['/Admin/E-commerce/Products']);
    })
  
  }
}













  // result : number = 0;

  // addProduct()
  // {
  //   this.userService.getAllProducts().subscribe((vehicle:any)=>{

  //     for (let index = 0; index < vehicle.length; index++) 
  //     {
  //       const element = vehicle[index];
  
  //       if(this.productDetailsForm.value.vehicleId == element.vehicleId)
  //       {
  //         console.log(this.productDetailsForm.value.vehicleId,element.vehicleId);
          
  //         this.result = 1
  //       }
  
  //     }
  
  //     if (this.result == 0) 
  //     {
  //       this.adminService.addProductsToDatabase(this.productDetailsForm.value).subscribe(response => {
  //         alert("Product Added Sucessfully ...");
    
  //         this.router.navigate(['/Admin/E-commerce/Products']);
  //       })
        
  //     }
  //     else if(this.result == 1)
  //     {
  //       alert("Product with Id "+this.productDetailsForm.value.vehicleId+" Already present ...");
  //     }
  //   })
       
  // }

