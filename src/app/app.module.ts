import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './composant/products/add-product/add-product.component';
import { ShowProductComponent } from './composant/products/show-product/show-product.component';
import { UpdateProductComponent } from './composant/products/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ShowProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({  timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,}),
    ToastContainerModule,
    BrowserAnimationsModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
