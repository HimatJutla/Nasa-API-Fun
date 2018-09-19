import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'asteroidDimensionalFormatter' })
export class AsteroidDimensionalFormatterPipe implements PipeTransform {

  transform(dimensionalNum: any) {
    let dimensionalNumToFixed = Math.round(dimensionalNum);
    let dimensionalumFormatted = dimensionalNumToFixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return dimensionalumFormatted;
  }
}
