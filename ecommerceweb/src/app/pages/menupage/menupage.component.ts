import { ProductService } from 'src/app/services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Order } from 'src/app/model/order';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { filter, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  private menuUrl = 'http://localhost:4200/menu';


  constructor(private param:ActivatedRoute, private service:OrderDetailsService, private productService:ProductService) { }
  productData!: Product[];
  getMenuId:any;
  menuData:any;


  ngOnInit(): void {
    this.getproduct1();
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if(this.getMenuId)
    {

      // this.menuData = this.service.foodDetails.filter((value)=>{
      //   return value.id == this.getMenuId;
      // });
      // console.log(this.menuData,'menudata>>');

      // this.menuData = this.productService.productData1.filter((value) => {
      //   return value.id == this.getMenuId;
      // });
      // console.log(this.menuData, 'menudata>>>');

      this.productService.getProducts().subscribe(val => {
        this.productData = val;
        this.menuData = this.productData.filter((value) => {
          return value.id == this.getMenuId;
        })
        console.log(this.productData, 'qqqqq');
        console.log(this.menuData, 'menudataaaa')
      });


    }

  }

  public getproduct1(): void {
    console.log(this.productService.arrproduct, 'arrproduct');

  }

  // public getProduct(): void {
  //   this.productService.getProducts().subscribe(
  //     (response: Product[])=> {
  //       this.productData = response;
  //     },
  //     (error:HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form')!.click();
  this.service.addEmployee(addForm.value).subscribe(
    (response: Employee) => {
      console.log(response);
      addForm.reset();

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

public onAddOrder(addForm: NgForm): void {
  this.service.addOrder(addForm.value).subscribe(
    (response: Order) => {
      console.log(response);
      alert("訂購成功");
      window.location.href = this.menuUrl;//tmp
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}


}
