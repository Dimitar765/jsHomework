import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/order.service';
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



  ngOnInit(): void {
    // this.products = this.productService.getProducts()
    this.productService.productObsevable.subscribe((data) => {
      console.log('data from obs', data);
      this.products = data as Product[]

    })

  }



  addOrder(id: number) {
    this.orderService.addToOrders(id)
  }

}
