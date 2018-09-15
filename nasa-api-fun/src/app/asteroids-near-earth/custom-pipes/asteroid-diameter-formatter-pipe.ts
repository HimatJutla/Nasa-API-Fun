import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'asteroidDiameterFormatter' })
export class AsteroidDiameterFormatterPipe implements PipeTransform {

  transform(diameterNum: number) {
    return diameterNum.toFixed(2);
  }

}
