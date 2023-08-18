import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { Product } from '../model/product';
import { AdminService } from '../services/admin.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { StorageService } from '../services/storage.service';
import { SharedService } from '../services/shared.service';
import { Location } from '@angular/common';
import { withNoXsrfProtection } from '@angular/common/http';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  products: Product[] = [];
  product: any;
  id: any;
  currentUser: any;
  username: any;
  cartId: any;
  productId: any;
  cartData: any = [
    {
      cartId: '',
      items: [],
      totalPrice: '',
    },
  ];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private storageService: StorageService,
    private router: Router,
    private route : ActivatedRoute,
    private sharedService: SharedService,
    private location: Location
  ) {
    
  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.username = this.currentUser.username;
    this.cartId = this.username;
    console.log(this.cartId);
    this.cartService.getCartByCartId(this.cartId).subscribe((data) => {
      console.log(data);
      this.cartData = data;
      console.log(this.cartData);
    });

    const products = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    this.totalPrice = products.reduce((sum,product)=>sum + product.prodPrice,0);

    const productJSON = localStorage.getItem('selectedProduct');
    if (productJSON) {
      this.cartData.items = JSON.parse(productJSON);
    }
    
  }

  getCartProducts() : any[] {
    const productsJSON = localStorage.getItem('selectedProduct');

    if (productsJSON) {
      console.log("This is myu local storage"+JSON.parse(productsJSON));
      return JSON.parse(productsJSON);
    }

    return [];

  }

  getSelectedProducts(): any[] {
    //return this.sharedService.selectedProduct;
    const savedProducts = localStorage.getItem('selectedProducts');
    return savedProducts ? JSON.parse(savedProducts) : [];
  }

  removeProduct(product : any): void {
    const savedProducts = localStorage.getItem('selectedProducts');
    const products = savedProducts ? JSON.parse(savedProducts) : [];
    
    const index = products.findIndex((p:any)=>p.prodId === product.prodId);

    if(index !== -1) {
      products.splice(index,1);

      localStorage.setItem('selectedProducts', JSON.stringify(products));
    }

    const productsUp = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    this.totalPrice = productsUp.reduce((sum,product)=>sum + product.prodPrice,0);

  }

  trackByIndex(index: number, product: any): number {
    return index;
  }

  // Get the product index for display purposes
  getProductIndex(product: any): number {
    return this.sharedService.selectedProduct.indexOf(product) + 1;
  }

  goBack(): void {
    this.location.back();
  }

  onClickDelete(productId: any) {
    this.cartService
      .deleteProductInCartById(productId, this.cartId)
      .subscribe((data) => {
        console.log(data);
        alert('product deleted successfully!');
        window.location.reload();
      });
  }

  onClickDecreaseButton(productId: any) {
    this.cartService
      .decreaseQuantityOfProduct(productId, this.cartId)
      .subscribe((data) => {
        console.log(data);
        window.location.reload();
      });
  }

  onClickIncreaseQuant(productId: any) {
    this.cartService
      .increaseQuantityOfProduct(productId, this.cartId)
      .subscribe((data) => {
        console.log(data);
        window.location.reload();
      });
  }

  onClickEmptyCart() {
    this.cartService.emptyCart(this.cartId).subscribe((data) => {
      console.log(data);
      alert('Cart deleted successfully');
      window.location.reload();
    });
  }

  goToHome() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  navigateToAddress() {
    this.router.navigate(['add-address']);
  }

  onclickShopNow() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
