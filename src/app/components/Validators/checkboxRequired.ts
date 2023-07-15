import { ValidatorFn, AbstractControl } from '@angular/forms';

export function checkboxRequired(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isChecked = control.value === true;
    return isChecked ? null : { 'checkboxRequired': true };
  };
}