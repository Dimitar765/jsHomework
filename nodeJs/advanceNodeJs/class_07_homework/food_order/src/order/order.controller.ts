import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './orders.dtos/orders.dto';
import { UpdateDto } from './orders.dtos/update.order.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService){}
    @UseGuards(AuthGuard)
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
    @UsePipes(ValidationPipe)
    createOrder(@Body() orderData: OrderDto){
        // console.log(orderData);
        
        return this.orderService.addOrder(orderData)
    }

    @Patch("/:id")
    @UsePipes(ValidationPipe)
    updateOrder(
    @Param("id") orderId: string,
    @Body() updateData: UpdateDto
   ){
    return this.orderService.updateOrder(orderId, updateData)
   }

   @Delete(":id")
   async deleteOrder(@Param("id") id: string){
    await this.orderService.deleteOrder(id)
   }
}
