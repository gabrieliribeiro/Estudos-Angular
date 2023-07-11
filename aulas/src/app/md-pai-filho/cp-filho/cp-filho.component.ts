import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cp-filho',
  templateUrl: './cp-filho.component.html',
  styleUrls: ['./cp-filho.component.scss']
})
export class CpFilhoComponent {
  @Input() public carroFilho:any;
}
