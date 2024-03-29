import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  xyz: Product[];

  ngOnInit(): void {
    this.orders = this.orderService._orders
    this.xyz = this.orderService.getUnique(this.orders)

  }

}
