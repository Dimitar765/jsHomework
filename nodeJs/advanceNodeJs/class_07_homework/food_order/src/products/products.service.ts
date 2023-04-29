import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductDto } from './product.dto/product.dto';
import { UpdateProduct } from './product.dto/update.product.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product_entity/product.entity';
import { Repository } from 'typeorm';
import { OrderEntity } from 'src/order/order_entity/order.entity';




@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepo: Repository<ProductEntity>,

        @InjectRepository(OrderEntity)
        private readonly orderRepo: Repository<OrderEntity>
    ){}

    // product: Product [] = [
    //     {id: "01", productName: "firstProduct", productPrice: 300},
    //     {id: "02", productName: "secondProduct", productPrice: 200},
    //     {id: "03", productName: "thirdProduct", productPrice: 30}

    // ]

    getProducts(){
        return this.productRepo.find({
            relations: ['order']
        });

    }

     async getProductById(productId: string){
        const product = await this.productRepo.findOneBy({id: productId})

        return product;
    }

    async createProduct(productData: ProductDto, orderId: string): Promise<string>{
        const order = await this.orderRepo.findOneBy({ id: orderId})
        // console.log(order);

        const productEntityIstance = this.productRepo.create({
            ...productData,
            order: order
        })

        const productSaved = await this.productRepo.save(productEntityIstance);
        return productSaved.id
        

        // const newProduct = {
        //     ...productData,
        //     order: order
            
            
        // }
        // this.productRepo.create(newProduct);
        // this.productRepo.save(newProduct);
        // return newProduct

    }

      async updateProduct(productId: string, update: UpdateProduct){

        const updateProduct: Product = {
            id: productId,
            ...update
        }
        
        const product = await this.productRepo.preload({
            id: productId,
            ...updateProduct
        });
        if(!product){
            throw new NotFoundException("product not faound")
        }
        await this.productRepo.save(product);
        return product.id

    }

    async deleteProduct(productId: string){
        await this.productRepo.delete(productId);
}
}