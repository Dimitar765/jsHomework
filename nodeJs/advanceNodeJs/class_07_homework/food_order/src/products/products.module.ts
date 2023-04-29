import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product_entity/product.entity';
import { OrderEntity } from 'src/order/order_entity/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, OrderEntity])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
