import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulo: string;
  msg: string;
  metrica: string;
  metricIcon: string;
  auxilios: {}[];
  credito: number;
  auxMoradia: number;
  auxPreEscola: number;
  auxSaude: number;
  auxOutros: number;

  auxMoradiaEscolhido: number;
  auxPreEscolaEscolhido: number;
  auxSaudeEscolhido: number;
  auxOutrosEscolhido: number;
  produtos: any[];

  constructor() { }

  setMetrica(value) {
    this.metrica = value;
  }

  setIcon(value) {
    this.metricIcon = value;
  }

  ngOnInit() {
    this.titulo = 'O Preço do Martelo';
    this.msg = "";
    this.metrica = 'Moradias Populares';
    this.metricIcon = 'fa fa-home fa-2x';
    this.auxMoradia = 76000000;
    this.auxPreEscola = 500000;
    this.auxSaude = 23000000;
    this. auxOutros = 5000000;

    this.auxMoradiaEscolhido = 0;
    this.auxPreEscolaEscolhido = 0;
    this.auxSaudeEscolhido = 0;
    this.auxOutrosEscolhido = 0;
    this.credito = this.auxMoradia + this.auxPreEscola + this.auxSaude + this. auxOutros;
    this.auxilios = [
      {'nome':'Auxílio alimentação', 'valor': 7, 'icon': 'fa fa-cutlery'},
      {'nome':'Auxílio moradia', 'valor': 10, 'icon': 'fa fa-building'},
      {'nome':'Ajuda de custo', 'valor': 2, 'icon': 'fa fa-credit-card-alt '}
    ];
    this.produtos = this.getProdutos();
  }

  genArray(n: number): any[] {
    return Array(n);
  }

  getNumeroPossivel(preco) {
    return this.credito / preco;
  }

  getTotalCompras() {
    let sum = 0; 
    this.produtos.forEach(element => {
      sum += element.qtd * element.preco;
    });
    return sum;
  }

  setMsg(flag) {
    if (flag) {
      this.msg = "Foi difícil, mas você conseguiu gastar o dinheiro!"
    } else {
      this.msg = "";
    }
  }

  getCreditos() {
    let sum = this.auxMoradiaEscolhido
      + this.auxOutrosEscolhido
      + this.auxPreEscolaEscolhido
      + this.auxSaudeEscolhido
      - this.getTotalCompras();
    if (sum < 0) {
      this.setMsg(true);
      return 0;
    } else {
      this.setMsg(false);
      return sum;
    }
  }

  setAuxMoradiaEscolhido(event) {
    this.auxMoradiaEscolhido = event.value;
  }

  setAuxPreEscolaEscolhido(event) {
    this.auxPreEscolaEscolhido = event.value;
  }
  setAuxSaudeEscolhido(event) {
    this.auxSaudeEscolhido = event.value;
  }
  setAuxOutrosEscolhido(event) {
    this.auxOutrosEscolhido = event.value;
  }

  setQtd(event) {
    console.log(event);
    
  }

  getProdutos() {
    return [
      {
        'nome': 'Casas populares',
        'preco': 73000,
        'qtd': 0
      },
      {
        'nome': 'Ambulâncias',
        'preco': 173000,
        'qtd': 0
      },
      {
        'nome': 'Cestas básicas',
        'preco': 200,
        'qtd': 0
      },
      {
        'nome': 'Panetones',
        'preco': 13,
        'qtd': 0
      },
      {
        'nome': 'Panelas pra bater',
        'preco': 45,
        'qtd': 0
      }
      ,
      {
        'nome': 'Champagne Chandon',
        'preco': 76,
        'qtd': 0
      },
      {
        'nome': 'Coxinhas',
        'preco': 60000,
        'qtd': 0
      },
      {
        'nome': ' Bolsas Chanel',
        'preco': 314,
        'qtd': 0
      }
      ,
      {
        'nome': ' Alunos por ano',
        'preco': 2500,
        'qtd': 0
      }
    ]
  }

}
