import { AbstractControl } from '@angular/forms';

export const min = (count: number, message: string) => {
    return (control: AbstractControl) => {
        const value: string = control.value;

        if (!!value && value.length <= count) {
            return { message };
        }
        return null;
    }
}