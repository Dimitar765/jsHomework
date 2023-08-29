import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/addOrder.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  constructor(private readonly productService: ProductsService,
    private readonly orderService: OrderService
  ) { }

  orders: Product[] = [];

  ngOnInit(): void {
    this.orders = this.orderService._orders
    console.log(this.orders);
  }



}
