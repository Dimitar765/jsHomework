import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/addOrder.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[] = [];
  constructor(private readonly productService: ProductsService,
    private readonly orderService: OrderService
  ) {
  }

  // @Output()
  // orderId = new EventEmitter<number>()

  ngOnInit(): void {
    this.products = this.productService.getProducts()

  }

  // order(orderId: number) {
  //   this.orderId.emit(orderId)
  //   console.log(orderId);

  // }

  addOrder(id: number) {
    this.orderService.addToOrders(id)
  }

}
