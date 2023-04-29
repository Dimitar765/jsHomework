import { IsNotEmpty } from "class-validator";
import { Product } from "src/interfaces/product.interface";
import { Column, PrimaryColumn } from "typeorm";
// maybe ProductDto ???


export class OrderDto {
    @PrimaryColumn()
    @IsNotEmpty()
    id: string;
    @Column({type: 'bigint'})
    orderDate: number;
    @Column()
    // @IsNotEmpty()
    productOrdered: Product []
}