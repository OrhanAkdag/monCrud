import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  productToAdd =  new Product();
  brandAvailable: string[];
  favBrandAvailable: string;
  productModel: string[];
  constructor(private productService: ProductService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.brandAvailable = this.productService.brandAvailable;
    this.productModel = this.productService.productModel;
    this.productToAdd = new Product();
  }

  addProduct(){
    this.productService.addProduct(this.productToAdd).subscribe(data => {
      this.route.navigate(['/products']);
    });
    this.toastr.success('Produit ajouter', 'Confirmé');
  }

}
