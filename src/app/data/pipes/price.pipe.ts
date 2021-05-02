import { Pipe, PipeTransform } from '@angular/core';
import { Price } from '../models/TripModel';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(pr: Price, ...args: unknown[]): unknown {
    const sign = signs.filter((f) => f.id == pr.currency)[0]?.sign ?? '$';
    return `${pr?.basePrice ?? 0} ${sign}`;
  }
}

const signs = [
  { id: 'dollar', sign: '$' },
  { id: 'lira', sign: '₺' },
];