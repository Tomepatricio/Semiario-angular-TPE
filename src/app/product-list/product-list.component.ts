import { Component, OnInit } from "@angular/core";
import { Product } from "./Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      image: "assets/img/1.jpg",
      name: "Pink Car Soap",
      type: "Shampoo",
      price: 1050,
      stock: 10,
      offer: true,
      quantity: 0
    },
    {
      image: "assets/img/2.jpg",
      name: "Orange Degreaser",
      type: "Desengrasante",
      price: 980,
      stock: 15,
      offer: false,
      quantity: 0
    },
    {
      image: "assets/img/4.jpg",
      name: "Non Silicone",
      type: "Renovador",
      price: 1200,
      stock: 12,
      offer: false,
      quantity: 0
    },
    {
      image: "assets/img/pinkSoap.jpg",
      name: "Yellow Degreaser",
      type: "Desengrasante",
      price: 980,
      stock: 0,
      offer: false,
      quantity: 0
    }
  ];

  constructor() {}

  ngOnInit() {}

  increaseQuantity(product: Product) {
    if (product.stock > product.quantity) {
      product.quantity++;
    }
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  changeQuantity(event, product: Product) {
    console.log(event);
  }
}
