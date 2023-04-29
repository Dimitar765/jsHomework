import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn()
    id: number;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password:string;
}