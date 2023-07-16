import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss'],
})
export class MicroondasComponent {
  time: number = 0;
  selectedDigits: string = '';
  maxTime: number = 5999;
  isPaused: boolean = false;

  formatTime(): string {
    const minutes: number = Math.floor(this.time / 60);
    const seconds: number = this.time % 60;

    const formattedMinutes: string = String(minutes).padStart(2, '0');
    const formattedSeconds: string = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  addDigit(digit: number): void {
    const newTime = this.time * 10 + digit;
    if (this.selectedDigits.length < 4) {
      this.selectedDigits += digit.toString();
      if (
        this.selectedDigits.length === 1 ||
        this.selectedDigits.length === 2
      ) {
        this.time = +this.selectedDigits;
        if (this.time > 99) {
          this.time = 99;
          }
      } else if (
        this.selectedDigits.length === 3 ||
        this.selectedDigits.length === 4
      ) {
        const minutes = Math.floor(+this.selectedDigits / 100);
        const seconds = +this.selectedDigits % 100;
        this.time = minutes * 60 + seconds;
        if (this.time > this.maxTime) {
          this.time = this.maxTime;
          }
      }
    }
  }

  addTime(seconds: number): void {
    const newTime = this.time + seconds;
    if (newTime <= this.maxTime) {
      this.time = newTime;
    }
  }

  startMicrowave() {
    const countdown = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(countdown);
        this.isPaused = true;
        setTimeout(() => {
          this.isPaused = false;
        }, 300);
      }
    }, 1000);
  }

  cancelMicrowave() {
    this.selectedDigits = '';
    this.time = 0;
  }
}
