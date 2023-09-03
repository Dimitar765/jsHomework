import { Injectable } from "@angular/core";
import { PRODUCTS_DATA } from "../data/product-data";
import { Product } from "../interfaces/product.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor() { }

    _products: Product[] = PRODUCTS_DATA;
    _orders: Product[] = [];
    productToAdd: Product | undefined;


    orderObservable = new Observable<Product[]>((observer) => {
        observer.next(this._orders)
    })

    addToOrders(productId: number): Product | undefined {
        this.productToAdd = this._products.find(product => product.id === productId);
        if (!this.productToAdd) {
            console.error('Product not found');
            return undefined;
        }
        this.productToAdd.stock = this.productToAdd.stock - 1
        this.productToAdd.quantity = (this.productToAdd.quantity ?? 0) + 1
        this.productToAdd.totalPrice = this.productToAdd.quantity * this.productToAdd.price

        // this._orders.push(this.productToAdd);
        this._orders = [...this._orders, this.productToAdd]

        return this.productToAdd;
    }



    getOrders() {

        return this._orders
    }

}



