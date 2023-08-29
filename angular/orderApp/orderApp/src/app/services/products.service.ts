import { Injectable } from '@angular/core';
import { PRODUCTS_DATA } from '../data/product-data'
import { Product } from '../interfaces/product.interface';
// import { OrderService } from './addOrder.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
  ) { }

  _products: Product[] = PRODUCTS_DATA;
  // _orders: any = []



  getProducts(): Product[] {
    return this._products
  }





}