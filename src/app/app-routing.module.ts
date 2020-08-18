import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './composant/products/add-product/add-product.component';
import { ShowProductComponent } from './composant/products/show-product/show-product.component';
import { UpdateProductComponent } from './composant/products/update-product/update-product.component';


const routes: Routes = [

  {path:"addProduct",component:AddProductComponent},
  {path:"showProducts",component:ShowProductComponent},
  {path:"updateProduct/:id",component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
