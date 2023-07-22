import { AbstractControl } from "@angular/forms"

export const required = (message: string) => {
    return (control: AbstractControl) => {
        if (!control.value || control.value === 0 ) {
            return { message }
        }
        return null;
    }
}