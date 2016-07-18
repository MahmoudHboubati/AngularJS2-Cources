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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.totalVotes = 0;
                    this.myVote = 0;
                }
                // @Output() vote() { }
                VoteComponent.prototype.isVotedUp = function () { return this.myVote == 1; };
                ;
                VoteComponent.prototype.isVotedDown = function () { return this.myVote == -1; };
                ;
                VoteComponent.prototype.voteUp = function () {
                    this.myVote = this.myVote == 1 ? 0 : 1;
                };
                VoteComponent.prototype.voteDown = function () {
                    this.myVote = this.myVote == -1 ? 0 : -1;
                };
                __decorate([
                    core_1.Input('total-votes'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "totalVotes", void 0);
                __decorate([
                    core_1.Input('my-vote'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n      <div class=\"vote-container\">\n      <i\n        (click)=\"voteUp()\"\n        class=\"glyphicon glyphicon-menu-up vote-button\"\n        [class.highlighted]=\"myVote == 1\" ></i>\n      <span class=\"vote-count\">{{totalVotes + myVote}}</span>\n      <i\n        (click)=\"voteDown()\"\n        class=\"glyphicon glyphicon-menu-down vote-button\"\n        [class.highlighted]=\"myVote == -1\"></i>\n        </div>",
                        styles: ["\n      .highlighted {\n        font-weight: bold;\n        color: orange;\n      }\n      .vote-container {\n        width:20px;\n        text-align: center;\n        color: #999;\n      }\n      .vote-button {\n        cursor: pointer;\n      }\n      .vote-count {\n        font-size: 1.2em;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map