import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  id: number;
  @IsNotEmpty()
  name: string;
}
