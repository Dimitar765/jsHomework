import { Product } from "src/interfaces/product.interface";


export class UpdateDto {
    productOrdered: Product [];
    comment: string;
}