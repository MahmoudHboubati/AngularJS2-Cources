System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ZipperComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZipperComponent = (function () {
                function ZipperComponent() {
                    this.closed = true;
                }
                ZipperComponent.prototype.toggle = function () {
                    this.closed = !this.closed;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZipperComponent.prototype, "title", void 0);
                ZipperComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n      <div class=\"panel panel-primary\">\n        <div (click)=\"toggle()\" class=\"panel-heading\">{{title}}\n          <i class=\"pull-right glyphicon\"\n          [ngClass]=\"{'glyphicon-chevron-down' : closed, 'glyphicon-chevron-up' : !closed}\">\n          </i>\n        </div>\n        <div class=\"panel-body\" *ngIf=\"!closed\" [hidden]=\"closed\">\n          <ng-content></ng-content>\n        </div>\n      </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZipperComponent);
                return ZipperComponent;
            }());
            exports_1("ZipperComponent", ZipperComponent);
        }
    }
});
//# sourceMappingURL=zipper.component.js.map