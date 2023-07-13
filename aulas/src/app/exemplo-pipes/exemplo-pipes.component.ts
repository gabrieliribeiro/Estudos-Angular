import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent {
  public searchTerm: string = '';
  public items: string[] = [
    'Maçã',
    'Banana',
    'Laranja',
    'Abacaxi',
    'Pêssego',
    'Melancia',
    'Limão'
  ];
}
