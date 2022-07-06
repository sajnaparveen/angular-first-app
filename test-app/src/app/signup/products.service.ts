import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productName = "honey"
quantity=2;
price=80;

  constructor() { }
    increasevalue(){
    this.quantity++;
    }
  

}
