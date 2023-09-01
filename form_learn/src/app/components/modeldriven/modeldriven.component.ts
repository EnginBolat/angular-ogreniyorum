import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalLetterValidator } from 'src/app/validators/func';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.scss'],
})
export class ModeldrivenComponent {
  frm?: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3),capitalLetterValidator(3)]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      adress: formBuilder.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        adress: ['', Validators.required],
      }),
    });
  }

  get name() {
    return this.frm.get('name');
  }
  get surname() {
    return this.frm.get('name');
  }
  get email() {
    return this.frm.get('name');
  }

  onSubmit() {
    console.log(this.frm.value);
  }
}
