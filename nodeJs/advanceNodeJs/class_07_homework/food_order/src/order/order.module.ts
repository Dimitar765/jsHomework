import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order_entity/order.entity';
import { ProductEntity } from 'src/products/product_entity/product.entity';
import { ProductsController } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ TypeOrmModule.forFeature([OrderEntity, ProductEntity])],
  providers: [OrderService, ProductsService, JwtService],
  controllers: [OrderController, ProductsController]
})
export class OrderModule {}
