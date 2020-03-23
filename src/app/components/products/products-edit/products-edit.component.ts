import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  productToEdit: Product;
  isLoading: boolean;
  brandAvailable: string[];
  favBrandAvailable: string;
  productModel: string[];

  constructor(private carService: ProductService, private route: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.carService.getProductById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data:
      Product) => {
    this.productToEdit = data;
    this.isLoading = false;
  });
}
editProduct() {
  this.carService.editProduct(this.productToEdit).subscribe(then => {
  this.route.navigate(['/products']);
  this.toastr.success('Produit mis à jour', 'Confirmé!');
});
}

}
