import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class BuyCartService {

  private _cartList: Product[] = [];

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  addToBuyCart(product: Product) {
    let item: Product = this._cartList.find((index) => index.name == product.name);
    
    if(!item)
      this._cartList.push({ ... product});
    else 
        item.quantity += product.quantity;
    
    this.cartList.next(this._cartList);
  }
}
