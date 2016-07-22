System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Rx_1;
    var SerachComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            SerachComponent = (function () {
                function SerachComponent(myElement) {
                    var keyups = Rx_1.Observable.fromEvent(myElement.nativeElement, "keyup");
                    keyups.subscribe(function (data) { console.log(data); });
                }
                SerachComponent = __decorate([
                    core_1.Component({
                        selector: 'search-up',
                        template: "<input id=\"search-up\" [(ngModel)]=\"query\" class=\"form-control\" type=\"text\" placeholder=\"search\">"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SerachComponent);
                return SerachComponent;
            }());
            exports_1("SerachComponent", SerachComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map