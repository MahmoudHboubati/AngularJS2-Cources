import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    inputs: ['isFavorite:is-favorite']
})

export class FavoriteComponent {
    isFavorite = false;
    // @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    fontSize = '2em';
    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
