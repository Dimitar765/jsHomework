import { Injectable } from "@angular/core";
import { PRODUCTS_DATA } from "../data/product-data";
import { Product } from "../interfaces/product.interface";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private _products: Product[] = PRODUCTS_DATA;
    _orders: Product[] = [];
    productToAdd: Product | undefined;
    _testProduct: Observable<Product[]>;

    constructor() { }


    addToOrders(productId: number): Product | undefined {
        this.productToAdd = this._products.find(product => product.id === productId);
        if (!this.productToAdd) {
            console.error('Product not found');
            return undefined;
        }
        this.productToAdd.stock = this.productToAdd.stock - 1
        this.productToAdd.quantity = (this.productToAdd.quantity ?? 0) + 1
        // console.log(this.productToAdd.quantity);

        this._orders = [...this._orders, this.productToAdd];
        // this._testProduct = this._orders
        return this.productToAdd;
    }

    getUnique(_orders: Product[]): Product[] {
        const products = Array.from(new Set<Product>(_orders))
        console.log('from order service', products);
        return products

    }


    getOrders() {
        console.log(this._orders);

        return this._orders
    }

}



