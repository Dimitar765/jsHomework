import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './orders.dtos/orders.dto';
import { UpdateDto } from './orders.dtos/update.order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService){}

    @Get()
    getOrders(){
        const orders = this.orderService.getOrders()
        return orders
    }

    @Get("/:id")
    getOrderById(@Param("id") orderId: string){
        return this.orderService.getOrderById(orderId)
    }

    @Post()
    createOrder(@Body() orderData: OrderDto){
        return this.orderService.addOrder(orderData)
    }

    @Patch("/:id")
   updateOrder(
    @Param("id") orderId: string,
    @Body() updateData: UpdateDto
   ){
    return this.orderService.updateOrder(orderId, updateData)
   }
}
