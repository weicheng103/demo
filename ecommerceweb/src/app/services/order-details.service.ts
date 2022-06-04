import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  
  //foodDetails
  foodDetails =[
    {
      id:1,
      foodName:"aaa",
      foodDetails:"good a",
      foodPrice:200,
      foodImg:"https://i2.wp.com/www.tripresso.com/blog/wp-content/uploads/2019/03/M1-1.png?w=1108&ssl=1"
    },
    {
      id:2,
      foodName:"bbb",
      foodDetails:"good b",
      foodPrice:300,
      foodImg:"https://i0.wp.com/www.tripresso.com/blog/wp-content/uploads/2019/03/M2.jpg?w=800&ssl=1"
    },
    {
      id:3,
      foodName:"ccc",
      foodDetails:"good c",
      foodPrice:400,
      foodImg:"https://i1.wp.com/www.tripresso.com/blog/wp-content/uploads/2019/03/M4.png?w=854&ssl=1"
    },
    {
      id:4,
      foodName:"ddd",
      foodDetails:"good d",
      foodPrice:500,
      foodImg:"https://i2.wp.com/www.tripresso.com/blog/wp-content/uploads/2019/03/M6.png?w=912&ssl=1"
    },
    {
      id:5,
      foodName:"eee",
      foodDetails:"good e",
      foodPrice:600,
      foodImg:"https://i0.wp.com/www.tripresso.com/blog/wp-content/uploads/2019/03/M9.png?w=796&ssl=1"
    },
    {
      id:6,
      foodName:"fff",
      foodDetails:"good f",
      foodPrice:200,
      foodImg:"https://worldbuygo.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-27-at-1.12.47-PM.jpeg"
    },
  ]
}
