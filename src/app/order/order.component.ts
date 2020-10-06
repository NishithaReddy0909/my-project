import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  order:any[]=[
    {OrderId:1,ProductName:"Mobile",Price:49999.99,Quantity:5,Date:("09/09/2019")},
    {OrderId:2,ProductName:"Laptop",Price:99999.99,Quantity:3,Date:("14/07/2020")},
    {OrderId:3,ProductName:"Washing Machine",Price:67567.99,Quantity:5,Date:("22/05/2019")},
    {OrderId:4,ProductName:"Laptop",Price:99999.99,Quantity:3,Date:("14/07/2020")},
  ];

}
