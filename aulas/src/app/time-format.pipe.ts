import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    const [minutes, seconds] = value.split(':');
    const parsedMinutes: number = parseInt(minutes, 10);
    const parsedSeconds: number = parseInt(seconds, 10);

    if (isNaN(parsedMinutes) || isNaN(parsedSeconds)) {
      return value;
    }

    const formattedMinutes: string = this.padNumber(parsedMinutes, 2);
    const formattedSeconds: string = this.padNumber(parsedSeconds, 2);
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  private padNumber(value: number, length: number): string {
    return value.toString().padStart(length, '0');
  }
}
