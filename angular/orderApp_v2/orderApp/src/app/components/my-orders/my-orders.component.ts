import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  constructor(
    private readonly orderService: OrderService
  ) { }

  orders: Product[] = [];
  uniqueOrders: Product[];
  // tempOrder: any

  ngOnInit(): void {
    this.orders = this.orderService.getOrders()
    this.uniqueOrders = this.orderService.getUnique(this.orders)

    this.orderService.orderObservable.subscribe((data) => {
      console.log(data);

    })
  }
}
