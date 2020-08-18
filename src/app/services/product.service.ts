import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';


import { ToastrService } from 'ngx-toastr';
 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  [x: string]: any;
  private host ='http://localhost:3030/api';
  constructor(private httpClient: HttpClient,private toastr: ToastrService) {}

  public allProducts() {
    return this.httpClient.get(this.host+'/products');
  }
  public deleteProduct(id:String)
  {
    return this.httpClient.delete(this.host+"/products/"+id);
  }
  public getOneProduct(id:String)
  {
    return this.httpClient.get<Product>(this.host+"/products/"+id);
  }
  public addProduct(objet:Product)
  {
    return this.httpClient.post(this.host+"/products",objet);
  }
  public updateProduct(objet:Product,id:String)
  {
    return this.httpClient.put(this.host+"/products/"+id,objet);
  }

  showSuccess(msg:string) {
    this.toastr.success(msg, 'Success Toast !');
  }

  showWarn(msg:string) {
    this.toastr.warning(msg, 'Warning Toast !');
  }

  showError() {
    this.toastr.error('Attention !! Error', 'Error Toast !');
  }

  
}
