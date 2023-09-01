import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('frm', { static: true }) frm?: NgForm;
  ngOnInit(): void {}

  loadData() {
    this.frm?.control.patchValue({
      adress: {
        country: 'Türkiye',
        city: 'Antalya',
        adress: 'Konyaaltı',
      },
      name: 'Engin',
      surname: ' Bolat',
      email: 'engi.bolat@gmail.com',
    });
  }

  onSubmit(data: any) {
    console.log('Value :' + this.frm?.value);
    console.log('Valid :' + this.frm?.valid);
    console.log('Touched :' + this.frm?.touched);
    console.log('Submitted :' + this.frm?.submitted);
    console.log('Data: ' + data);
  }
}