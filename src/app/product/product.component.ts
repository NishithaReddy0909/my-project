import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title:string="List of Flowers";
  imgsrc="/assets/images/flowers.jpg";
  isDisable=false;
  isActive=false;
  //imgonline="https://images-na.ssl-images-amazon.com/images/I/71IeYNcBYdL._SL1280_.jpg";
  newproduct="Pen";


  constructor() { }

  ngOnInit(): void {
  }
  //title:string="List of Products";
  //products=["Refrigerator","Washing Machine","Mobies","Laptops","Microwave Oven","LED"];
  getitle(){
    return this.title;
  }
  products=["Rose","Lotus","Jasmine","Lilly"];
  onclick(){
    this.products.push(this.newproduct);
  }
  onkeyUp(){
    // console.log(event);
    // console.log("key pressed in textbox");
    console.log(this.newproduct);
  }
  parent(){
    console.log("parent clicked");
  }
  onresetclick(event){
    event.stopPropagation();
    console.log("reset button clicked");
  }
  onsubmitblur(){
    console.log("submit button is blurred");
  }

}
