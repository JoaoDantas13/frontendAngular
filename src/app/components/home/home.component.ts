import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto : string = "Curso de angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção!`
  idProduto: number = 123;
  precoProduto: number = 2.30;
  promocao: boolean = true;
  dataValidade = '2021-12-31';
  foto:string = 'teste';

  constructor() { 
    //Variaveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + ' esta em promoção!';
    console.log('Nome do Produto : ' , this.nomeProduto);
    console.log('Anuncio : ', this.anuncio);

  }

  ngOnInit(): void {
  }

}
