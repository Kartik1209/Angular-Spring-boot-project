import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-products-by-manufacturer',
  templateUrl: './products-by-manufacturer.component.html',
  styleUrls: ['./products-by-manufacturer.component.css']
})
export class ProductsByManufacturerComponent implements OnInit {
  manufacturerName: any;
  products: Product[]=[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private PodName : FarmerService
  ) { }

  ngOnInit(): void {
    
  }

  getProductsByManufacturer(): void {
    //const url = `http://localhost:9002/user/availableProducts/${this.manufacturerName}`;
    this.PodName.productByManufacturer(this.manufacturerName)
      .subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.error("Error fetching products by manufacturer:", error);
        }
      );
    }
}

