import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {PasswordValidators} from './passwordValidators';
@Component({
    selector: 'reset-password-form',
    templateUrl: './app/reset-password-form.component.html'
})
export class ResetPasswordComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            currentPassword: ['', Validators.compose([Validators.required])],
            newPassword: ['',
                Validators.compose([Validators.required,
                    Validators.minLength(6),
                    PasswordValidators.passwordShouldContainsNumbers])],
            confirmPassword: ['', Validators.compose([Validators.required])]
        });
    }

    resetPassword() {
        console.log(this.form.value);
        if (this.form.find('currentPassword').value != '1234') {
            this.form.find('currentPassword').setErrors({
                invalidPassword: true
            })
        }
    }
}
