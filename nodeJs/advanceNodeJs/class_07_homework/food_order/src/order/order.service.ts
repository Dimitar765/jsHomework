import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/interfaces/order.interface';
// import { Product } from 'src/interfaces/product.interface';
import { OrderDto } from './orders.dtos/orders.dto';
import { UpdateDto } from './orders.dtos/update.order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order_entity/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepo: Repository<OrderEntity>
    ){}
    // orders: Order[] = [
    //     {id: "02", orderDate: new Date().toDateString(), productOrdered: 
    //     [
    //     {id: "01", productName: "firstProduct", productPrice: 300},
    //     {id: "02", productName: "secondProduct", productPrice: 200},
    //     {id: "03", productName: "thirdProduct", productPrice: 30}
    //     ]},
    // ]

    getOrders() {
        return this.orderRepo.find({
            relations: ["productOrdered"]
        });
        
    }

    async getOrderById(orderId: string){
        const order = await this.orderRepo.findOne({
            where: {id: orderId},
            relations: ["productOrdered"]
        })
        if(!order){
            throw new NotFoundException('order not faund')
        }
        else
        {
        return order}
    }

    async addOrder(orderData: OrderDto){
        const newOrder: OrderDto = {
            ...orderData,
            orderDate: new Date().getDate()

        }

         this.orderRepo.create(newOrder)
        await this.orderRepo.save(newOrder)

        return newOrder.id
    }

    async updateOrder(orderId: string, updateData: UpdateDto){
        const updateOrder: UpdateDto = {
            // id: orderId,
            ...updateData,
            // orderDate: 0
        }
        const order = await this.orderRepo.preload({
            id: orderId,
            ...updateOrder
        })

        if(!order){
            throw new NotFoundException("order with id not found")
        }

        await this.orderRepo.save(order)

    }
    async deleteOrder(orderId: string){
        await this.orderRepo.delete(orderId);
    }



}
   
