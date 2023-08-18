import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id : number;
  products :Product = new Product();

  constructor(private adminService:AdminService,private route:ActivatedRoute,private router : Router){

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getProductById(this.id).subscribe(data=>{
      this.products=data;
    });
  }

  onUpdateProduct(){
    this.adminService.updateProduct(this.id,this.products).subscribe(data=>{
      console.log(data);
      alert('Product details updated successfully');
      this.goToProducts();
    })
  }

  goToProducts(){
    this.router.navigate(['products']);
  }

}
