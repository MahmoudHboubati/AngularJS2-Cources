import { Component, Input, Output } from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
      <div class="vote-container">
      <i
        (click)="voteUp()"
        class="glyphicon glyphicon-menu-up vote-button"
        [class.highlighted]="myVote == 1" ></i>
      <span class="vote-count">{{totalVotes + myVote}}</span>
      <i
        (click)="voteDown()"
        class="glyphicon glyphicon-menu-down vote-button"
        [class.highlighted]="myVote == -1"></i>
        </div>`,
    styles: [`
      .highlighted {
        font-weight: bold;
        color: orange;
      }
      .vote-container {
        width:20px;
        text-align: center;
        color: #999;
      }
      .vote-button {
        cursor: pointer;
      }
      .vote-count {
        font-size: 1.2em;
      }
    `]
})

export class VoteComponent {
    @Input('total-votes') totalVotes = 0;
    @Input('my-vote') myVote = 0;
    // @Output() vote() { }

    isVotedUp() { return this.myVote == 1; };
    isVotedDown() { return this.myVote == -1; };

    voteUp() {
        this.myVote = this.myVote == 1 ? 0 : 1;
    }
    voteDown() {
        this.myVote = this.myVote == -1 ? 0 : -1;
    }
}
