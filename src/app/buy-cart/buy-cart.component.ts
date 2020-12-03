import { Component, OnInit } from '@angular/core';
import { BuyCartService } from 'app/buy-cart.service';
import { Observable } from 'rxjs';
import { Product } from 'app/product-list/Product';

@Component({
  selector: 'app-buy-cart',
  templateUrl: './buy-cart.component.html',
  styleUrls: ['./buy-cart.component.css']
})
export class BuyCartComponent implements OnInit {

  cartList$: Observable<Product[]>;
  
  constructor(private buyCart: BuyCartService) { 
    this.cartList$ = buyCart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
