import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faTrash = faTrash;
  faEdit = faEdit;
  faEye = faEye;
  displayedColumns: string[] = ['select', 'id', 'name', 'brand', 'type', 'actions'];
  products: Product[];
  dataSource = new MatTableDataSource<Product>();
  selection = new SelectionModel<Product>(true, []);
  isLoading: boolean;
  data = Object.assign(Product);
  modalRef: BsModalRef;
  message: string;
  clicked = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private productService: ProductService, private modalService: BsModalService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.data= data;
      this.isLoading = false;
  });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

    /** Delete one by one */
  deleteProduct(product: Product){
    this.isLoading = true;
    this.productService.deleteProduct(product).subscribe(data => {
      this.productService.getProducts().subscribe(allProducts => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.products = allProducts;
        this.isLoading = false;
        this.dataSource.data= allProducts;
        this.toastrService.success('Confirmé', 'Suppression du produit: ' + product.id);
        this.modalRef.hide();
        this.clicked = true;
        setTimeout(() => this.clicked = false,1000);
      });
      this.dataSource = new MatTableDataSource<Product>(this.dataSource.data);
    });
  }

  /** Delete by selecting from row */
  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      this.isLoading = true;
      this.productService.deleteProduct(item).subscribe(data => {
        console.log(data);
        this.productService.getProducts().subscribe(data => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSource.data= data;
          this.isLoading = false;
          this.modalRef.hide();
          this.toastrService.success('Confirmé', 'Suppression');
      });
      this.dataSource = new MatTableDataSource<Product>(this.dataSource.data);

      });
   });
   this.selection = new SelectionModel<Product>(true, []);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  /** Search Filter */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  decline(): void {
    this.clicked = true;
    this.message = 'Declined!';
    this.modalRef.hide();
    this.toastrService.error('Annulé', 'Opération annulé');
    setTimeout(() => this.clicked = false,1000);
}

}
