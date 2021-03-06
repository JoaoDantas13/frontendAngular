import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IProduto } from '../model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exiveErro(erro))
    );
  }

  buscarPorId(id:number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exiveErro(erro))
    );
  }


  cadastrar(produto:IProduto):Observable<IProduto>{
    return this.http.post<IProduto>(this.URL,produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exiveErro(erro))
    )
  }

  atualizar(produto:IProduto):Observable<IProduto>{
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`,produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exiveErro(erro))
    )
  }

  excluir(id:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exiveErro(erro))
    )
  }

  exiveErro(e: any): Observable<any> {
    this.exibirMensagem('ERRO!!', 'Não foi possivel realizar a operação!', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo)
  }
}
