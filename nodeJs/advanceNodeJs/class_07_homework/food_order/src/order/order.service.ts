import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/interfaces/order.interface';
// import { Product } from 'src/interfaces/product.interface';
import { OrderDto } from './orders.dtos/orders.dto';
import { UpdateDto } from './orders.dtos/update.order.dto';

@Injectable()
export class OrderService {
    orders: Order[] = [
        {id: "02", orderDate: new Date().toDateString(), productOrdered: 
        [
        {id: "01", productName: "firstProduct", productPrice: 300},
        {id: "02", productName: "secondProduct", productPrice: 200},
        {id: "03", productName: "thirdProduct", productPrice: 30}
        ]},
    ]

    getOrders() {
        return this.orders
    }

    getOrderById(orderId: string){
        const orders = this.getOrders()
        const orderById = orders.find((order) => order.id === orderId)
        if(!orderById){
            throw new NotFoundException("invalid id")
        }else{
            return orderById
        }
    }

    addOrder(orderData: OrderDto){
        const orders = this.getOrders()
        const newOrder: Order = {
            ...orderData,
            orderDate:new Date().toDateString()
        }
        orders.push(newOrder)

        return orders
    }

    updateOrder(orderId: string, updateData: UpdateDto){
        this.getOrderById(orderId) //error handling
        const orders = this.getOrders();
        
        const updated = orders.map((order) => {
            if(order.id === orderId){
                return {
                    ...updateData,
                    productOrdered: updateData.productOrdered
                }
            }
            return order
        })
        return updated
    }}
   
