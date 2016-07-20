import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
      <div class="panel panel-primary">
        <div (click)="toggle()" class="panel-heading">{{title}}
          <i class="pull-right glyphicon"
          [ngClass]="{'glyphicon-chevron-down' : closed, 'glyphicon-chevron-up' : !closed}">
          </i>
        </div>
        <div class="panel-body" *ngIf="!closed" [hidden]="closed">
          <ng-content></ng-content>
        </div>
      </div>`
})

export class ZipperComponent {
    @Input() title: string;
    closed: boolean = true;
    toggle() {
        this.closed = !this.closed;
    }
}
