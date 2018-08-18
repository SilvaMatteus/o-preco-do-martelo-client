import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulo: string;
  metrica: string;
  metricIcon: string;
  auxilios: {}[];
  credito: number;

  constructor() { }

  setMetrica(value) {
    this.metrica = value;
  }

  setIcon(value) {
    this.metricIcon = value;
  }

  ngOnInit() {
    this.titulo = 'O Preço do Martelo';
    this.metrica = 'Moradias Populares';
    this.metricIcon = 'fa fa-home fa-2x';
    this.credito = 75000;
    this.auxilios = [
      {'nome':'Auxílio alimentação', 'valor': 7, 'icon': 'fa fa-cutlery'},
      {'nome':'Auxílio moradia', 'valor': 10, 'icon': 'fa fa-building'},
      {'nome':'Ajuda de custo', 'valor': 2, 'icon': 'fa fa-credit-card-alt '}
    ];
  }

  genArray(n: number): any[] {
    return Array(n);
  }

  getNumeroPossivel(preco) {
    return this.credito / preco;
  }

  getProdutos() {
    return [
      {
        'nome': 'Casas populares',
        'preco': 73000
      },
      {
        'nome': 'Ambulâncias',
        'preco': 173000
      },
      {
        'nome': 'Cestas básicas',
        'preco': 200
      },
      {
        'nome': 'Panetones',
        'preco': 13
      },
      {
        'nome': 'Panelas pra bater',
        'preco': 45
      }
      ,
      {
        'nome': 'Champagne Chandon',
        'preco': 76
      },
      {
        'nome': 'Coxinhas',
        'preco': 60000
      },
      {
        'nome': ' Bolsas Chanel',
        'preco': 314
      }
      ,
      {
        'nome': ' Alunos por ano',
        'preco': 2500
      }
    ]
  }

}
