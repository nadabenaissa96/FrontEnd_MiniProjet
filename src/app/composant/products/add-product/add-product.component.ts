import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public currentProduct:any;
  mode:number=1;

  constructor(private productService: ProductService) { }

 
  ngOnInit(): void {
  }

  OnsaveProduct(data:Product){
    this.productService.addProduct(data).subscribe(res=>{
      this.currentProduct=res;
      this.mode=2;
      this.productService.showSuccess("Ce produit est ajouté avec success");
      },err=>{console.log(err.status)
        if(err.status=412){
         this.productService.showWarn("Ce produit est déjà exist !");
        }else{
          this.productService.showError();
        }
        ;})
  }

  OnewProduct(){
    this.mode=1;
  }

}
