import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent{
  time: number = 0;
  number: number = 0;
  isPaused: boolean = false;
  maxTime: number = 5940; 
  
  formatTime(): string {
  const minutes: number = Math.floor(this.time / 60);
  const seconds: number = this.time % 60;

  const formattedMinutes: string = String(minutes).padStart(2, '0');
  const formattedSeconds: string = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}


addDigit(digit: number) {
  const newTime = this.time * 10 + digit;
  if (newTime <= this.maxTime) {
    this.time = newTime;
  }
}

addTime(seconds: number) {
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
    this.time = 0;
  }
}
