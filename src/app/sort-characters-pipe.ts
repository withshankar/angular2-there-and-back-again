import {Pipe} from 'angular2/angular2';
import {Character} from './character';

@Pipe({ name: 'sortCharacters' })
export class SortCharactersPipe {
  transform(value: Array<Character>) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Character, b: Character) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
}