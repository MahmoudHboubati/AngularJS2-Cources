System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component', './vote.component', './tweet.component', './tweet.service', './summary.pipe', './zipper.component', './contact-form.component', './subscribtion-form.component', './signup-form.component', './reset-password-form.component', './search.component', './post.service'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, vote_component_1, tweet_component_1, tweet_service_1, summary_pipe_1, zipper_component_1, contact_form_component_1, subscribtion_form_component_1, signup_form_component_1, reset_password_form_component_1, search_component_1, post_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (zipper_component_1_1) {
                zipper_component_1 = zipper_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscribtion_form_component_1_1) {
                subscribtion_form_component_1 = subscribtion_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (reset_password_form_component_1_1) {
                reset_password_form_component_1 = reset_password_form_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService, _postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                    this.vedio = { title: 'V1', isFavorite: true, iLike: true, likesCount: 52, totalVotes: 9, myVote: 1 };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log('changed');
                };
                ;
                AppComponent.prototype.ngOnInit = function () {
                    this._postService.getPosts()
                        .subscribe(function (posts) {
                        console.log('posts: ' + posts[0].title);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/app.template.html",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent,
                            favorite_component_1.FavoriteComponent, like_component_1.LikeComponent,
                            vote_component_1.VoteComponent, tweet_component_1.TweetComponent,
                            zipper_component_1.ZipperComponent, contact_form_component_1.ContactFormComponent,
                            subscribtion_form_component_1.SubscribtionFormComponent, signup_form_component_1.SignupFormComponent,
                            reset_password_form_component_1.ResetPasswordComponent, search_component_1.SerachComponent],
                        providers: [tweet_service_1.TweetService, post_service_1.PostService],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService, post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map