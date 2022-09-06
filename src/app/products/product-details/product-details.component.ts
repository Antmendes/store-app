import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct, IProductCart } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined  ;
  quantity = 1;

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
  }

  addToCar(){
     this.notificationService.openSnack("The product has been added to the cart")
     const product: IProductCart = {
      ...this.product!,
      quantidade: this.quantity
     }
     this.cartService.addToCart(product);
  }

}
