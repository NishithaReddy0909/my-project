import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { OrderComponent } from './order/order.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { Product1ListComponent } from './product1-list/product1-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product1.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StudentComponent,
    UserLoginComponent,
    OrderComponent,
    NavigationComponent,
    HomeComponent,
    Product1ListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
