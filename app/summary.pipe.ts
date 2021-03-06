import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
    name: 'summary',

})

export class SummaryPipe {
    transform(value: string, args: string[]) {
        if (value) {
            var limit = (args && args[0]) ? parseInt(args[0]) : 50;
            return value.substring(0, limit) + "...";
        }
    }
}
