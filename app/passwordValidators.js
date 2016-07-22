System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.confirm = function (password) {
                };
                PasswordValidators.passwordShouldContainsNumbers = function (control) {
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
                        };
                    else
                        return null;
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map