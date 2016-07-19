System.register(['angular2/core', './tweet.service', './like.component', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1, like_component_1, summary_pipe_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', tweet_service_1.Tweet)
                ], TweetComponent.prototype, "tweet", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "<div class=\"media\">\n                <div class=\"media-left\">\n                  <a href=\"#\">\n                    <img class=\"media-object\" [src]=\"tweet.imgUrl\" alt=\"...\">\n                  </a>\n                </div>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">{{tweet.account}}</h4>\n                  {{tweet.text | summary:75}}\n                  <div>\n                  <like [i-like]=\"tweet.iLike\" [total-likes]=\"tweet.likes\"></like>\n                  </div>\n                </div>\n              </div>",
                        styles: ["\n        .media-object {\n          border-radius: 25px;\n        }\n        .media {\n          margin: 5px;\n        }\n      "],
                        directives: [like_component_1.LikeComponent],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map