import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProduct, products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products: IProduct[] | undefined ;

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const products = this.productsService.getAll();
    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLowerCase();
      
      if(descricao){
        this.products = products.filter(product => product.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.products = products;
    })
  }

}
