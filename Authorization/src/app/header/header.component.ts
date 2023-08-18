import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { StorageService } from '../services/storage.service';
import { FarmerService } from '../services/farmer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAddProducts = false;
  showProducts = false;
  showCart = false;
  username: string;
  searchTerm:string ='';
  typeData!:any;
  clickCart:boolean = false;

  constructor(private storageService:StorageService,
              private router:Router,
              private cartService:CartService,
              private productService:ProductService,
              private farmerService:FarmerService
              ){

  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.storageService.getToken();
    console.log("islogg", this.isLoggedIn);
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAddProducts = this.roles.includes('ROLE_ADMIN');
      this.showProducts = this.roles.includes('ROLE_ADMIN');
      this.showCart = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  onLogout(){
    this.storageService.signOut();
    alert('You have logged out successfully');
    this.router.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  filter(productType:any){
    this.productService.getProductsByType(productType).subscribe(data=>{
      console.log(data);
      this.productService.type.next(data);
    })   
  }

  getAll(){
    // this.productService.getAllProduct().subscribe(data=>{
    //   console.log(data);
    //   this.productService.type.next(data);
    //})
    
    //this.router.navigate(['/availableProducts'])

    this.router.navigate(['/availableProducts']).then(() => {
      this.farmerService.getAvailableProducts().subscribe(data => {
        // Handle the retrieved data as needed
        console.log(data);
      });
    });
    
  }

  onClickCart(){
    this.clickCart = true;
    // window.location.reload();
    this.router.navigate(['/cart']);
  }

  onClickElectronicShopping(){
    this.router.navigate(['/home']).then(()=>{
      window.location.reload();
    });
  }
}
