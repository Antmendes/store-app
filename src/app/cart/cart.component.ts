import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductCart } from '../products/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cartContents: IProductCart[] = [];
 total = 0;
  constructor(public cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.cartContents = this.cartService.getCart();
    this.sumTotal();
  }
  sumTotal(){
    this.total = this.cartContents.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  removeProductCart(productId: number){
    this.cartContents = this.cartContents.filter(item => item.id !== productId);
    this.cartService.removeItenCart(productId);
    this.sumTotal();
  }

  buy(){
    alert("Parabéns, você finalizou a compra!");
    this.cartService.cleanCart();
    this.router.navigate(["products"])
  }

}
