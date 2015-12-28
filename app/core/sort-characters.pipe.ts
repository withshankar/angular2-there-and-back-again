import {Pipe, PipeTransform} from 'angular2/core';
import {Character} from './character';

@Pipe({ name: 'sortCharacters' })
export class SortCharactersPipe implements PipeTransform {
  transform(value: Character[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Character, b: Character) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
}