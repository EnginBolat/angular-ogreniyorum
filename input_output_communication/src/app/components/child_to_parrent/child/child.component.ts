import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.data.emit({ message: 'Merhaba' });
  }
  @Output() data: EventEmitter<any> = new EventEmitter();
}
