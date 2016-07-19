import { Component, Input } from 'angular2/core';
import { Tweet } from './tweet.service';
import {LikeComponent}from './like.component';
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'tweet',
    template: `<div class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" [src]="tweet.imgUrl" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">{{tweet.account}}</h4>
                  {{tweet.text | summary:75}}
                  <div>
                  <like [i-like]="tweet.iLike" [total-likes]="tweet.likes"></like>
                  </div>
                </div>
              </div>`,
    styles: [`
        .media-object {
          border-radius: 25px;
        }
        .media {
          margin: 5px;
        }
      `],
      directives: [LikeComponent],
      pipes: [SummaryPipe]
})
export class TweetComponent {
    @Input() tweet: Tweet;
}
