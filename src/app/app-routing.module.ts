import { ProductDetailsComponent } from './product-details/product-details.component';
import { StudentComponent } from './student/student.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"product", component:ProductComponent},
  {path:"order",component:OrderComponent},
  {path:"student",component:StudentComponent},
  {path:"product-details/id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
