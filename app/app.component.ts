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

@Component({
    selector: 'my-app',
    templateUrl: `app/app.template.html`,
    directives: [CoursesComponent, AuthorsComponent,
        FavoriteComponent, LikeComponent,
        VoteComponent, TweetComponent,
        ZipperComponent, ContactFormComponent,
        SubscribtionFormComponent, SignupFormComponent,
        ResetPasswordComponent, SerachComponent],
    providers: [TweetService],
    pipes: [SummaryPipe]
})

export class AppComponent {
    vedio = { title: 'V1', isFavorite: true, iLike: true, likesCount: 52, totalVotes: 9, myVote: 1 };
    onFavoriteChange($event) {
        console.log('changed');
    };
    tweets: Tweet[];
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}
