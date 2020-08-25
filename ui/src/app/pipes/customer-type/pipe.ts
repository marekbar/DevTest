import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerType'
})
export class CustomerTypePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 5) {
      return 'Small';
    }

    if (value === 10) {
      return 'Large';
    }

    return '';
  }

}