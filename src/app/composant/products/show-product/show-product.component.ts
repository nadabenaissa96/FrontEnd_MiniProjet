import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  public products:any;
  public allproducts:any;
  public ProductFilter :any ;
  public mot_cle:string="";

  public currentproduct:any;
  prod:any;

  showModal : boolean;
  name    : string;
  price : string;
  quantite  : string;
  



  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {

    this.ShowProducts();
  }
  
  ShowProducts(){

    this.productService.allProducts().subscribe(data=>{
      this.products=data;
      this.allproducts=data;
      },
      error=>{
        console.log(error);
        this.productService.showError();
    });
   
  }

  Onchercher(form:any)
  {
      this.mot_cle=form.mot_cle;
  
        if(this.mot_cle!="")
        {
          this.ProductFilter=this.products.products.filter(x=>x.name==form.mot_cle);

          this.products.products= this.ProductFilter;
        
          this.products=this.products;
       
        }
        else{
          this.products=this.allproducts;
        }
  }

  OnDeleteProduct(id:String)
  {
      let conf=confirm("Etes vous sur de supprimer ce produit ??!!  ");
      if(conf)
      this.productService.deleteProduct(id).subscribe(data=>{
        this.productService.showSuccess("Produit est supprimé avec success");
        this.ShowProducts();
      },err=>{console.log(err);
        this.productService.showError();
      })
  }
  
  OnUpdateProduct(id:String)
  {
      this.router.navigateByUrl("/updateProduct/"+id);
  }

  OngetOneProduct(id:String){
    this.productService.getOneProduct(id)
    .subscribe(res=>
      this.currentproduct=res
  )}

  OnShowDetails(id:string)
  {
    this.productService.getOneProduct(id).subscribe(res=>
      {
        this.currentproduct=res,
        this.prod=this.currentproduct.product
        this.showModal = true;
        this.name= this.prod.name
        this.price= this.prod.price
        this.quantite= this.prod.quantite
      })
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


}
