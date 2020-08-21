import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phonenumbervalidator(control: AbstractControl): ValidationErrors | null {
    // if (isNaN(control.value)) {
    //     return { 'phonenumbervalidator': true, 'requiredValue': 10 }
    // }

    if (control.value.length != 10) {
        return { 'phonenumbervalidator': true}
    }

    return phonenumbervalidator;
}