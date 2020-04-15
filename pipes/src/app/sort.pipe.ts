import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false, // hurts performance
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    if (value.length <= 2 ) {
      return value
    }
    return value.sort((a, b) => a.name > b.name ? 1 : -1);
  }

}
