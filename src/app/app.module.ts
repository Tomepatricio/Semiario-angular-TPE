import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAboutComponent } from './product-about/product-about.component';
import { AppRoutingModule } from "./app-routing.modules";

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductAboutComponent],
  imports: [BrowserModule,AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
