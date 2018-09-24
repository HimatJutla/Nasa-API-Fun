import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'asteroidNameFormatter' })
export class AsteroidNameFormatterPipe implements PipeTransform {

  transform(nameText: string) {
    let nameTextSliced = nameText.slice(1, -1);
    nameTextSliced = nameTextSliced.replace(/[\])}[{(]/g, '');
    return nameTextSliced;
  }

}
