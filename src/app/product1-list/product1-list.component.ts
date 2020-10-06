import { ProductService } from './../product1.service';
import {product1} from '../product1.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product1-list',
  templateUrl: './product1-list.component.html',
  styleUrls: ['./product1-list.component.css']
})
export class Product1ListComponent implements OnInit {
 id:string;
  constructor(private service:ProductService,private route:ActivatedRoute) {
    this.id=this.route.params.id;
   }

  ngOnInit(): void {
  }


}
