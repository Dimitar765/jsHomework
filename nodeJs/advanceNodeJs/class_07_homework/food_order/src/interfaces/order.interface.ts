// import { Timestamp } from "typeorm";
import { ProductDto } from "src/products/product.dto/product.dto";
import { Product } from "./product.interface";

export interface Order {
    id: string,
    orderDate: number,
    productOrdered: Product[],
}