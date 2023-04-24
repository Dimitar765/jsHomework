import { IsNotEmpty } from "class-validator";
import { Product } from "src/interfaces/product.interface";
// maybe ProductDto ???


export class OrderDto {
    @IsNotEmpty()
    id: string;
    orderDate: string;
    @IsNotEmpty()
    productOrdered: Product []
}