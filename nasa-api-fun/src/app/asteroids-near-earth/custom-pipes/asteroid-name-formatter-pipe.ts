import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'asteroidNameFormatter' })
export class AsteroidNameFormatterPipe implements PipeTransform {

  transform(nameText: string) {
    return nameText.slice(1, -1);
  }

}
