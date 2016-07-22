import {Control} from 'angular2/common';

export class PasswordValidators {

    static confirm(password) {

    }

    static passwordShouldContainsNumbers(control: Control) {

        if (control.value &&
            control.value.indexOf('0') < 0 &&
            control.value.indexOf('1') < 0 &&
            control.value.indexOf('2') < 0 &&
            control.value.indexOf('3') < 0 &&
            control.value.indexOf('4') < 0 &&
            control.value.indexOf('5') < 0 &&
            control.value.indexOf('6') < 0 &&
            control.value.indexOf('7') < 0 &&
            control.value.indexOf('9') < 0 &&
            control.value.indexOf('8') < 0)
            return {
                passwordShouldContainsNumbers: true
            }
        else
            return null;
    }
}
