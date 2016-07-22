/// <reference path="../typings/tsd.d.ts" />
import {Component, AfterViewInit, ElementRef } from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'search-up',
    template: `<input id="search-up" [(ngModel)]="query" class="form-control" type="text" placeholder="search">`
})
export class SerachComponent {
    query: string;
    constructor(myElement: ElementRef) {
        var keyups = Observable.fromEvent(myElement.nativeElement, "keyup");
        keyups.subscribe(data => { console.log(data); });
    }
}
