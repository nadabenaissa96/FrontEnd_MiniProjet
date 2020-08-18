import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public currentproduct:any;
  constructor(private productService:ProductService,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.OngetOneProduct();
  }

  OngetOneProduct(){
    this.productService.getOneProduct(this.activeRoute.snapshot.params.id)
    .subscribe(res=>
      this.currentproduct=res
  )}


  OnUpdateProduct(value:any){
    let produit:Product;
    produit=new Product(value.name,value.price,value.quantite);

    this.productService.updateProduct(produit,this.activeRoute.snapshot.params.id).subscribe(res=>{
      this.productService.showSuccess("Ce produit est modifié avec succès");
      this.router.navigateByUrl("/showProducts");

      },err=>{console.log(err.status)
        if(err.status=412){
         this.productService.showWarn("Ce produit est déjà exist !");
        }else{
          this.productService.showError();
        }
        ;})

    }

}
