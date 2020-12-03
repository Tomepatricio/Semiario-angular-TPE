import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAboutComponent } from './product-about/product-about.component';
import { AppRoutingModule } from "./app-routing.modules";
import { InputNumerComponent } from './input-numer/input-numer.component';
import { BuyCartComponent } from './buy-cart/buy-cart.component';
import { ShowProductsComponent } from './show-products/show-products.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductAboutComponent, InputNumerComponent, BuyCartComponent, ShowProductsComponent],
  imports: [BrowserModule,AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
