import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'about',
    component: ProductAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }