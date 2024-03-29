import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstChar',
})
export class UpperFirstCharPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return [value[0].toUpperCase(), ...value.slice(1)].join('').toString();
  }
}
