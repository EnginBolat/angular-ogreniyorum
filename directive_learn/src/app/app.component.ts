import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'directive_learn';
  // *ngFor
  names: string[] = ['Engin', 'Ayça', 'Ahmet', 'Ali', 'Veli'];
  // *ngIf
  visible: boolean = false;
  // *ngSwitch
  number: number = 2;
}
