import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  formulario: FormGroup;

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null
  };

  constructor(private produtosService: ProdutosService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null,Validators.required],
      validade: [null,Validators.required],
      preco: [null,Validators.required]
    })


  }


  salvarProduto(): void {
    console.log(this.formulario.value);
    this.produtosService.cadastrar(this.formulario.value).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} foi cadastrado com sucesso. ID:${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }

}
