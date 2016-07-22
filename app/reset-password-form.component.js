System.register(['angular2/core', 'angular2/common', './passwordValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, passwordValidators_1;
    var ResetPasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            ResetPasswordComponent = (function () {
                function ResetPasswordComponent(fb) {
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.compose([common_1.Validators.required])],
                        newPassword: ['',
                            common_1.Validators.compose([common_1.Validators.required,
                                common_1.Validators.minLength(6),
                                passwordValidators_1.PasswordValidators.passwordShouldContainsNumbers])],
                        confirmPassword: ['', common_1.Validators.compose([common_1.Validators.required])]
                    });
                }
                ResetPasswordComponent.prototype.resetPassword = function () {
                    console.log(this.form.value);
                    if (this.form.find('currentPassword').value != '1234') {
                        this.form.find('currentPassword').setErrors({
                            invalidPassword: true
                        });
                    }
                };
                ResetPasswordComponent = __decorate([
                    core_1.Component({
                        selector: 'reset-password-form',
                        templateUrl: './app/reset-password-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ResetPasswordComponent);
                return ResetPasswordComponent;
            }());
            exports_1("ResetPasswordComponent", ResetPasswordComponent);
        }
    }
});
//# sourceMappingURL=reset-password-form.component.js.map