import {Component} from 'angular2/core';

@Component({
    selector: 'subscribtion-form',
    templateUrl: './app/subscribtion-form.component.html'
})
export class SubscribtionFormComponent {
    frequencies = [{}, { value: 1, text: 'Daily' },
        { value: 2, text: 'Weekly' },
        { value: 3, text: 'Monthly' }];

    onSubmit(form) {
        console.log(form);
    }
}
