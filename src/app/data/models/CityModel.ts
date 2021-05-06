import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';
import { ImageModel, ImageModelAdapter } from './ImageModel';

export class CityModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public locale: string,
    public image: ImageModel
  ) {}
}

@Injectable({ providedIn: 'root' })
export class CityModelAdapter implements Adapter<CityModel> {
  adapt(item: any): CityModel {
    if (!item.image) console.log(item.name);

    return new CityModel(
      item.id,
      item.name,
      item.description,
      item.locale,
      new ImageModelAdapter().adapt(item.image)
    );
  }
}