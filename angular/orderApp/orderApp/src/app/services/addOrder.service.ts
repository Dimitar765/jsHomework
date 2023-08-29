import { Injectable } from "@angular/core";
import { PRODUCTS_DATA } from "../data/product-data";
import { Product } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private _products: Product[] = PRODUCTS_DATA;
    _orders: Product[] = [];
    productToAdd: Product | undefined

    constructor() { }


    addToOrders(productId: number): Product | undefined {
        this.productToAdd = this._products.find(product => product.id === productId);
        if (!this.productToAdd) {
            console.error('Product not found');
            return undefined;
        }
        this.productToAdd.stock = this.productToAdd.stock - 1

        this._orders.push(this.productToAdd);
        return this.productToAdd;
    }

    getOrders() {
        return this._orders
    }
}
