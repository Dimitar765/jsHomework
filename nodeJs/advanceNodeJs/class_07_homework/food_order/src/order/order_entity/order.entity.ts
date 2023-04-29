import { Order } from "src/interfaces/order.interface";
// import { Product } from "src/interfaces/product.interface";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from 'src/products/product_entity/product.entity';
import { IsArray, IsNotEmpty } from "class-validator";



@Entity('orders')
export class OrderEntity implements Order {
    @PrimaryColumn()
    id: string;
    @Column()
    orderDate: number;
    @Column({nullable: true})
    comment?: string;
    @IsArray()
    @OneToMany(() => ProductEntity, (productEntity) => productEntity.order)
    productOrdered: ProductEntity[];
    
}