import { IsNotEmpty } from "class-validator";

export class UpdateProduct {
    @IsNotEmpty()
    productName: string;
    @IsNotEmpty()
    productPrice: number
}