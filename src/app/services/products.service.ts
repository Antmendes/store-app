import { Injectable } from '@angular/core';
import { IProduct, products } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products: IProduct[] = products;


  constructor() { }

  getAll(){
    return this.products;
  }

  getOne(productId: number){
      
      return this.products[productId - 1];
  }
}
