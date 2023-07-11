import { Component, OnInit } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';

@Component({
  selector: 'app-cp-b',
  templateUrl: './cp-b.component.html',
  styleUrls: ['./cp-b.component.scss']
})
export class CpBComponent implements OnInit{
  public lista: Array<string> =[];

  constructor(private service: ExemploServiceService){}

  ngOnInit(): void {
      this.lista = this.service.getLista();
  }
}
