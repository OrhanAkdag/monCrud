import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  brandAvailable = ['Adidas', 'Nike', 'Puma'];
  productModel = ['Sport', 'Ville', 'Football'];
  urlApi = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.urlApi + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product):Observable<Product>{
    product.dateStock = new Date();
    return this.httpClient.post<Product>(this.urlApi, product).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  editProduct(productToUpdate: Product): Observable<Product>{
    return this.httpClient.put<Product>(this.urlApi + '/' + productToUpdate.id, productToUpdate).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.httpClient.delete<Product>(this.urlApi + '/' + product.id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
