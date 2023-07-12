import { Component, DoCheck } from '@angular/core';
import { Task } from '../../models/task';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public taskList: Array<Task> = JSON.parse(
    localStorage.getItem('tarefas') || '[]'
  );

  public setEmitTaks(event: string) {
    this.taskList.push({ name: event, checked: false });
  }

  public deleteItem(event: number) {
    return this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm(
      'Tem certeza de que deseja excluir todos os itens?'
    );
    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('A tarefa esta vazia, deseja deletar?');
      if (confirm) {
        this.deleteItem(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('tarefas', JSON.stringify(this.taskList));
    }
  }
}
