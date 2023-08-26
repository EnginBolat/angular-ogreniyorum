import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private custom: CustomPipe) {
    custom.transform('asdasdasd', 3, 4);
  }

  name = 'Engin';
  names: Map<number, string> = new Map([
    [1, 'engin'],
    [2, 'veli'],
    [3, 'Abulrezak'],
  ]);
}
