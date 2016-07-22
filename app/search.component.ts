import {Component, AfterViewInit, ElementRef } from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response } from 'angular2/http';

@Component({
    selector: 'search-up',
    template: `<input id="search-up" [(ngModel)]="query" class="form-control" type="text" placeholder="search">`
})
export class SerachComponent {
    query: string;
    constructor(myElement: ElementRef, private http: Http) {
        var keyups = Observable.fromEvent(myElement.nativeElement, "keyup")
            .map(e => e.target.value)
            .filter(x => x.length > 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                var url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
                return this.http.get(url);
            });

        var subscribtion = keyups.subscribe((data: Response) => { console.log(this.extractData(data)); });
        // subscribtion.unsubscribe();
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
