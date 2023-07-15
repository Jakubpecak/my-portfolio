import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { checkboxRequired } from 'src/app/components/Validators/checkboxRequired';
import { required } from 'src/app/components/Validators/required';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form!: UntypedFormGroup;
  isChecked: boolean = false;
  isFormValid = false;

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.setFormValue();

    this.form.valueChanges.subscribe(() => {
      this.isFormValid = this.form.valid;
      console.log(this.form);
    });
  }

  setFormValue() {
    this.form = this.fb.group({
      name: ['', required('Name is required.')],
      email: ['', [required('Email is required.')]],
      phone: ['', [required('Phone is required.')]],
      description: ['', [required('Description is required.')]],
      accept: [false, checkboxRequired()]
    });
  }

  onSubmit() {
    Object.entries(this.form.controls).forEach(([key]) => {
      this.form.get(key)?.markAsDirty();
    });

    if (this.isFormValid) {
      console.log('send');

      this.form.reset();
      this.isFormValid = false;
    }
  }

  get accept() {
    return this.form.get('accept');
  }

}
