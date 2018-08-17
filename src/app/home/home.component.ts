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
    this.auxilios = [
      {'nome':'Auxílio alimentação', 'valor': 7, 'icon': 'fa fa-cutlery'},
      {'nome':'Auxílio moradia', 'valor': 10, 'icon': 'fa fa-building'},
      {'nome':'Ajuda de custo', 'valor': 2, 'icon': 'fa fa-credit-card-alt '}
    ];
  }

  genArray(n: number): any[] {
    return Array(n);
  }

}
