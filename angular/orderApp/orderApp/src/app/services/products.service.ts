import { Injectable, OnInit } from '@angular/core';
import { PRODUCTS_DATA } from '../data/product-data'
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {

  constructor() { }

  productData: Product[] = PRODUCTS_DATA;

  ngOnInit(): void {

  }


}
