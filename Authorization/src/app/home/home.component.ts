import { Component, OnInit } from '@angular/core';
import { Subject} from 'rxjs';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  products: Product[]=[];
  filteredType:Product[] = [];
  searchKey:string ='';
  currentUser :any;
  username:any;
  user:boolean = false;
  roles:any ;
  cartId:any;

  constructor(
    private productService: ProductService,
    private cartService : CartService,
    private storageService:StorageService
  ) {}
  ngOnInit(): void {
    this.showProducts();
    this.currentUser = this.storageService.getUser();  
    this.username = this.currentUser.username;
      this.cartId = this.username;
    this.roles = this.currentUser.roles;
    this.user = this.roles.includes('ROLE_USER');
      console.log("cartId is" +this.cartId);
    this.cartService.search.subscribe(data=>{
     this.searchKey = data;
    })
    this.productService.type.subscribe(data=>{
      this.filteredType = data;
      console.log(this.filteredType);
    })
  }

  showProducts(){
    this.productService.getAllProduct().subscribe(data=>{
      this.products=data;
      this.filteredType = data;
      console.log(data);
      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  addProductWithCondition(productId:any){
    this.cartService.addProductToCartCondition(this.cartId,productId).subscribe(data=>{
      alert("Product added to cart successfully");
      console.log(data);
    });
  }
}
