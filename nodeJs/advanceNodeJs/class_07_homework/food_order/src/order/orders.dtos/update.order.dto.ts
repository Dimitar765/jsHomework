import { IsNotEmpty } from "class-validator";
import { Product } from "src/interfaces/product.interface";


export class UpdateDto {
    productOrdered: Product [];
    @IsNotEmpty()
    comment: string;
}