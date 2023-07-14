import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private http: HttpClient){}

  public valor: string = '';
  public valorDolar: number = 0;
  public valorEuro: number = 0;
  public valorPesoArgentino: number = 0;

  getData(): Observable<any> {
    let url = 'https://api.hgbrasil.com/finance?format=json-cors&key=SUA-CHAVE';
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public buscaValor() {
    this.getData().subscribe((data) => {
      this.valorDolar = data['results']['currencies']['USD']['buy'] * parseFloat(this.valor);
      this.valorEuro = data['results']['currencies']['EUR']['buy'] * parseFloat(this.valor);
      this.valorPesoArgentino = data['results']['currencies']['ARS']['buy'] * parseFloat(this.valor);
    });
  }
}
