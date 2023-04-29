import { Product } from "src/interfaces/product.interface";
import { OrderEntity } from "src/order/order_entity/order.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";



@Entity('products')
export class ProductEntity implements Product {
    @PrimaryColumn()
    id: string;
    @Column()
    productName: string;
    @Column()
    productPrice: number;

    @ManyToOne(() => OrderEntity, (order) => order.productOrdered, { onDelete:'CASCADE'})
    order: OrderEntity;
    
    
}