System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService, Tweet;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            id: 1,
                            iLike: false,
                            text: 'this is good',
                            account: 'mhmoud.21830',
                            likes: 5,
                            imgUrl: 'http://lorempixel.com/100/100/people?' + 1
                        },
                        {
                            id: 2,
                            iLike: true,
                            text: 'this is good',
                            account: 'ammar.21830',
                            likes: 3,
                            imgUrl: 'http://lorempixel.com/100/100/people?' + 2
                        },
                        {
                            id: 3,
                            iLike: false,
                            text: 'this is good',
                            account: 'emran.21830',
                            likes: 2,
                            imgUrl: 'http://lorempixel.com/100/100/people?' + 3
                        }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
            Tweet = (function () {
                function Tweet() {
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map