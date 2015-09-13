import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {CharacterService} from './character-service';
import {Character} from './character';
import {Routes} from './route-config';
import {CHARACTER_DIRECTIVES} from './character-directives';
import {InitCapsPipe} from './init-caps-pipe'
import {SortCharactersPipe} from './sort-characters-pipe'
import {FilterTextComponent} from './filter-text-component';
import {FilterService} from './filter-service';

@Component({ selector: 'my-characters' })
@View({
  templateUrl: 'app/characters-component.html',
  directives: [CHARACTER_DIRECTIVES, FilterTextComponent],
  styleUrls: ['app/characters-component.css'],
  pipes: [InitCapsPipe, SortCharactersPipe]
})
export class CharactersComponent {
  public filteredCharacters: Array<Character>;
  private _characters: Array<Character>;
  public currentCharacter: Character;
  public filterText = '';

  dataAsync: Promise<string>;

  constructor(private _filterService: FilterService,
    private _characterService: CharacterService, private _router: Router) {

    this.filteredCharacters = this.Characters;
    this.dataAsync = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('data from promise');
      }, 500)
    });
  }

  get Characters() {
    if (this._characters) { return this._characters; }

    this._characterService.getCharacters().then(Characters =>
      this._characters = this.filteredCharacters = Characters
      );
    return this._characters;
  }

  getSelectedClass(character: Character) {
    return { 'selected': character === this.currentCharacter };
  }

  goDetail() {
    this._router.navigate(`${Routes.detail.as}/${this.currentCharacter.id}`);
  }

  onSelect(character: Character) { this.currentCharacter = character; }

  filterChanged(data: string) {
    this.filteredCharacters = this._filterService.filter(data, ['id', 'name'], this._characters);
  }
}
