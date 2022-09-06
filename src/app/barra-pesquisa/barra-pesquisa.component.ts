import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
 descricao = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    if(this.descricao){
      this.router.navigate(["products"],{queryParams: {descricao: this.descricao}});
      return;
    }
    this.router.navigate(["products"]);
  }

}
