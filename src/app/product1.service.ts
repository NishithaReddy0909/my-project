
import {product1} from './product1.model';
import {Injectable} from '@angular/core';
@Injectable({
  "providedIn":"root"
})
export class ProductService{
getProducts():product1[]{
  return[
 new product1(1,"LED",45678,3),
 new product1(2,"LCD",789,5),
 new product1(3,"Laptop",99999,10)

  ];
}
}

