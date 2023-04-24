import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductDto } from './product.dto/product.dto';
import { UpdateProduct } from './product.dto/update.product.dto'




@Injectable()
export class ProductsService {
    product: Product [] = [
        {id: "01", productName: "firstProduct", productPrice: 300},
        {id: "02", productName: "secondProduct", productPrice: 200},
        {id: "03", productName: "thirdProduct", productPrice: 30}

    ]

    getProducts(){
        return this.product

    }

     getProductById(productId: string){
        const product =  this.getProducts();
        // console.log(product);
        
        const productById = product.find((product) => product.id === productId)
        console.log(productById);
        if(!productById) {throw new NotFoundException("invalid Id")}
        else{

            return productById

        }
    }

    addProduct(productData: ProductDto){
        const products = this.getProducts();
        const newProduct: Product = {
            ...productData
        }
        products.push(newProduct)
        return products


    }

      updateProduct(productId: string, update: UpdateProduct){
        
        this.getProductById(productId)  //error handling
        const products =   this.getProducts();       
         const updated = products.map((product) => {
            if (product.id === productId){
                return {
                    ...update,                    
                    productName: update.productName,
                    productPrice: update.productPrice
                }
                
            }
            return product
        } 
        )
        
        // console.log(updated);
        return updated
        

    }

    deleteProduct(productId: string){
        const products = this.getProducts();
         const newArray = products.filter((product) => product.id !== productId)

         if(products.length === newArray.length){
            throw new NotFoundException("nothing to delete")

         }else{

             return newArray
         }

        }
    
}
