import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { TweetComponent } from './tweet.component';
import {TweetService, Tweet} from './tweet.service';
import {SummaryPipe} from './summary.pipe';
import {ZipperComponent} from './zipper.component';
import {ContactFormComponent} from './contact-form.component';
import {SubscribtionFormComponent} from './subscribtion-form.component';
import {UsernameValidators} from './usernameValidators';
import {SignupFormComponent} from './signup-form.component';
import {ResetPasswordComponent} from './reset-password-form.component';
import {SerachComponent} from './search.component';
import {PostService, Post} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
@Component({
    selector: 'my-app',
    templateUrl: `app/app.template.html`,
    directives: [CoursesComponent, AuthorsComponent,
        FavoriteComponent, LikeComponent,
        VoteComponent, TweetComponent,
        ZipperComponent, ContactFormComponent,
        SubscribtionFormComponent, SignupFormComponent,
        ResetPasswordComponent, SerachComponent],
    providers: [TweetService, PostService],
    pipes: [SummaryPipe]
})

export class AppComponent implements OnInit {

    isLoading = true;


    vedio = { title: 'V1', isFavorite: true, iLike: true, likesCount: 52, totalVotes: 9, myVote: 1 };
    onFavoriteChange($event) {
        console.log('changed');
    };
    tweets: Tweet[];
    constructor(tweetService: TweetService, private _postService: PostService) {
        this.tweets = tweetService.getTweets();
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe((posts: Post[]) => {
                console.log('posts: ' + posts[0].title);
            });
    }
}
