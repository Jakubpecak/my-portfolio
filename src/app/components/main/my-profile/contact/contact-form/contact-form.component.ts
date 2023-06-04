import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { required } from 'src/app/components/Validators/required';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form!: UntypedFormGroup;
  isChecked: boolean = false;

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.setFormValue();

    this.form.valueChanges.subscribe((data) => {
      console.log(this.form);
    });
  }

  setFormValue() {
    this.form = this.fb.group({
      name: ['', required('To pole jest wymagane')],
      email: ['', [required('To pole jest wymagane')]],
      phone: ['', [required('To pole jest wymagane')]],
      description: ['', [required('To pole jest wymagane')]],
      accept: [false]
    });
  }

  onSubmit() {
    Object.entries(this.form.controls).forEach(([key]) => {
      this.form.get(key)?.markAsDirty();
    });

    if (this.form.valid) {
      console.log('test')
    }
    
  }


}
