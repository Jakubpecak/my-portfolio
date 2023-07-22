import { AbstractControl } from '@angular/forms';

export const max = (count: number, message: string) => {
    return (control: AbstractControl) => {
        const value: string = control.value;

        if (!!value && value.length >= count) {
            return { message };
        }
        return null;
    }
}