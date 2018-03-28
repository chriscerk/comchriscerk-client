import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'pretty-url'
})
export class PrettyURLPipe implements PipeTransform {
    transform(value: string): string {
        let limit = 150;
        return value.substr(0, limit).replace(" ", "-");
    }

    untransform(value: string): string {
        return value.replace("-", " ");
    }
}