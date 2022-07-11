import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;
  arrproduct: Product[]=[];
  productData1 = [
    {
    id: 16,
    category: "string",
    name: "string",
    description: "string",
    price: "string",
    cost: "string",
    quantity: "string",
    effective: "string",
    image: "https://www.ssp.co.jp/eve/tw/images/ph_eveA_01.jpg"
  },
  {
    id: 19,
    category: "string",
    name: "string",
    description: "string",
    price: "string",
    cost: "string",
    quantity: "string",
    effective: "string",
    image: "https://cdn1.cybassets.com/media/W1siZiIsIjE1MDk3L3Byb2R1Y3RzLzMzNjc3Nzg0LzE2MjE0Mjg4NzZfZTI2NGVmNDdlNjMxYTE1MWE4NDQuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=e857134679f6c303"
  }
];

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
  }

  public getProductsForId(): Observable<void> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`).pipe(
      map(data => {
        this.arrproduct = data;
      })
    );
  }



}
