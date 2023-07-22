import { AbstractControl } from '@angular/forms';

export const email = (message: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return (control: AbstractControl) => {
        const isValid = emailPattern.test(control.value);

        if (!isValid && !!control.value) {
            return { message };
        }
        return null;
    }
}