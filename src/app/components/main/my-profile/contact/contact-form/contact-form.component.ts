import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { checkboxRequired } from 'src/app/components/Validators/checkboxRequired';
import { email } from 'src/app/components/Validators/email';
import { max } from 'src/app/components/Validators/max';
import { min } from 'src/app/components/Validators/min';
import { required } from 'src/app/components/Validators/required';

import { SnackbarComponent } from 'src/app/components/shared/snackbar/snackbar.component';
import { Message } from 'src/app/models/message';
import { MyProfileService } from 'src/app/services/my-profile.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form!: UntypedFormGroup;
  isChecked: boolean = false;
  isFormValid = false;

  constructor(private fb: UntypedFormBuilder, public snackBar: SnackbarComponent, private myProfileService: MyProfileService) {
  }

  ngOnInit(): void {
    this.setFormValue();

    this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.isFormValid = this.form.valid;
    });
  }

  setFormValue() {
    this.form = this.fb.group({
      name: ['', [required('Name is required.'), min(3, 'Name is too short.'), max(15, 'Name too long.')]],
      email: ['', [required('Email is required.'), email('Invalid email format.'), max(50, 'Email too long.')]],
      phone: ['', [required('Phone is required.'), max(15, 'Phone is too long.')]],
      description: ['', [required('Description is required.'), min(10, 'Min. 10 characters.'), max(500, 'Max. 500 characters.')]],
      accept: [false, checkboxRequired()]
    });
  }

  onSubmit() {
    Object.entries(this.form.controls).forEach(([key]) => {
      this.form.get(key)?.markAsDirty();
    });

    if (this.isFormValid) {
      const messageData: Message = {
        name: this.form.get('name')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value,
        description: this.form.get('description')?.value
      }

      this.myProfileService.sendMessage(messageData).subscribe(() => {
        this.snackBar.openSnackBar('Message was sent.');
      }, (_error) => {
        this.snackBar.openSnackBar('Error occurred, please try again later.', true);
      });
      this.form.reset();
      this.isFormValid = false;
    }
  }

  get accept() {
    return this.form.get('accept');
  }

}
