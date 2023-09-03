import { Injectable } from '@angular/core';
import { PRODUCTS_DATA } from '../data/product-data'
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
  ) { }
  _products: Product[] = PRODUCTS_DATA;

  productObsevable = new Observable((observer) => {
    observer.next(this._products)
    // console.log(this.productObsevable);


  })


  getProducts(): Product[] {
    return this._products
  }

}