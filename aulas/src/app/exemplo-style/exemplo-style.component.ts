import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-style',
  templateUrl: './exemplo-style.component.html',
  styleUrls: ['./exemplo-style.component.scss'],
})
export class ExemploStyleComponent {
  isDarkMode = false;

  toggleDarkMode(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isDarkMode = target.checked;
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
