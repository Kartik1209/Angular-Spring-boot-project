import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Product } from '../model/product';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent{

  products : Product=new Product();

  constructor(private adminService:AdminService,private router : Router){
  }
  ngOnInit(): void {
    
  }

  addProduct(){
    this.adminService.addProduct(this.products).subscribe(data=>{
      console.log(data);
      alert('Product Added Successfully');
      this.goToProducts();
    });
  }

  goToProducts(){
    this.router.navigate(['products']);
  }

  reset(form:any){
    form.reset();
  }
  
}
