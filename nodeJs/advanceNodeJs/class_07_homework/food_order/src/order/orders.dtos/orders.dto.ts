import { Product } from "src/interfaces/product.interface";
// maybe ProductDto ???


export class OrderDto {
    id: string;
    orderDate: string;
    productOrdered: Product []
}