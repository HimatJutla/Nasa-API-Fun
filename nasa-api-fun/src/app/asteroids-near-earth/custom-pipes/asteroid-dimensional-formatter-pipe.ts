import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'asteroidDimensionalFormatter' })
export class AsteroidDimensionalFormatterPipe implements PipeTransform {

  transform(dimensionalNum: any) {
    let dimensionalNumToFixed = dimensionalNum.toFixed(2);
    let dimensionalumFormatted = dimensionalNumToFixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return dimensionalumFormatted;
  }
}
