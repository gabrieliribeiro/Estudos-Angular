import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent {
  @Output() public emiteItemTask = new EventEmitter();

  public addItemTask: string = '';

  public submitItemTask(){
    this.addItemTask =  this.addItemTask.trim();
    if (this.addItemTask) {
      this.emiteItemTask.emit(this.addItemTask);
      this.addItemTask = '';
    }
  }
}
