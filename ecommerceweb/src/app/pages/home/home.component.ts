import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ProductService } from 'src/app/services/product.service';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private service:OrderDetailsService) { }
  constructor(private productService:ProductService) { }
  // foodData:any;
  productData: Product[] = [];
  ngOnInit(): void {
    // this.foodData = this.service.foodDetails;
    //  this.productData = this.getProducts;
    // console.log(this.getProducts());
    this.getProducts();
    // console.log(this.foodData);
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.productData = response;
        console.log(this.productData)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
