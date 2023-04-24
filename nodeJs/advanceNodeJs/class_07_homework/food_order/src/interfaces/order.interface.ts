import { Product } from "./product.interface";

export interface Order {
    id: string,
    orderDate: number | string,
    productOrdered: Product[]
}