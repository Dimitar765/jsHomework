import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './product.dto/product.dto';
import { UpdateProduct } from './product.dto/update.product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Get()
    getProducts(){
            const products = this.productService.getProducts()
            return products
        }

    @Get("/:id")
    getProductsById(@Param("id") productId: string) {
        return this.productService.getProductById(productId)
    }

    @Post()
    addProduct(@Body() productData: ProductDto){
        return this.productService.addProduct(productData)
    }

    @Patch("/:id")
    updateProduct(
    @Param("id") productId: string,
    @Body() update: UpdateProduct,
    ){
        return this.productService.updateProduct(productId, update)
    }

    @Delete("/:id")
    deleteProduct(@Param("id") productId: string){
        return this.productService.deleteProduct(productId)
    }

    }
