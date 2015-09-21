import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {FilterService} from '../blocks/filter.service';
import {FilterTextComponent} from '../blocks/filter-text.component';
import {InitCapsPipe} from '../blocks/init-caps.pipe'
import {CharacterService} from '../core/character.service';
import {Character} from '../core/character';
import {SortCharactersPipe} from '../core/sort-characters.pipe'
import {COMMON_DIRECTIVES} from '../core/constants';
import {Routes} from '../route.config';

@Component({ selector: 'taba-characters' })
@View({
  templateUrl: './app/characters/characters.component.html',
  directives: [COMMON_DIRECTIVES, FilterTextComponent],
  styleUrls: ['./app/characters/characters.component.css'],
  pipes: [InitCapsPipe, SortCharactersPipe]
})
export class CharactersComponent {
  public filteredCharacters: Character[];
  private _characters: Character[];
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

    this._characterService.getCharacters()
      .then(Characters =>
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
