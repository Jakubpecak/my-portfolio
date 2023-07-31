import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private fb: UntypedFormBuilder, public snackBar: SnackbarComponent, 
    private myProfileService: MyProfileService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.setFormValue();

    this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.isFormValid = this.form.valid;
    });
  }

  setFormValue() {
    this.form = this.fb.group({
      name: ['', [required('errors.required-name'), 
      min(3, 'errors.min-name'), max(15, 'errors.max-name')]],
      email: ['', [required('errors.required-email'), 
      email('errors.email'), max(50, 'errors.max-email')]],
      phone: ['', [required('errors.required-phone'), 
      max(15, 'errors.max-phone')]],
      description: ['', [required('errors.required-description'), 
      min(10, 'errors.min-description'), max(500, 'errors.max-description')]],
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
        this.snackBar.openSnackBar(this.translate.instant('errors.message-success'));
      }, (_error) => {
        this.snackBar.openSnackBar(this.translate.instant('errors.message-failed'), true);
      });
      this.form.reset();
      this.isFormValid = false;
    }
  }

  get accept() {
    return this.form.get('accept');
  }

}
