import { Component, Input } from '@angular/core';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  @Input() endereco!:Endereco;
}
