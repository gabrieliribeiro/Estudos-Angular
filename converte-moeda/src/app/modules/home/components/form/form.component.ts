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
  public valorDolar: number = 0.00;
  public valorEuro: number = 0.00;
  public valorPesoArgentino: number = 0.00;

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
      const dolarRate = data['results']['currencies']['USD']['buy'];
      const euroRate = data['results']['currencies']['EUR']['buy'];
      const pesoArgentinoRate = data['results']['currencies']['ARS']['buy'];

      this.valorDolar = parseFloat((parseFloat(this.valor)* dolarRate).toFixed(2));
      this.valorEuro = parseFloat((parseFloat(this.valor) * euroRate).toFixed(2));
      this.valorPesoArgentino = parseFloat((parseFloat(this.valor) * pesoArgentinoRate).toFixed(2));
    });
  }
}
