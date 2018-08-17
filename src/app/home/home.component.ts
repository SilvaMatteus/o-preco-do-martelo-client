import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulo: string;
  metrica: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'O Preço do Martelo';
    this.metrica = 'METRICA';
  }

}
