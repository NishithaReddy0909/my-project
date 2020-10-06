import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product1.service';
import { Component, OnInit } from '@angular/core';
import {product1} from '../product1.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:string;
  products:product1[];
  productById:product1[];
  constructor(private service:ProductService,private route:ActivatedRoute) {
   this.id=  this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.products=this.service.getProducts();
    this.getProductById();
  }
 getProductById(){
   for(let product of this.products){
     if(product.id.toString()==this.id){
       this.productById = product;
     }
   }
 }

}
