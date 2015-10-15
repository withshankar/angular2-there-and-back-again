import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {FilterService} from '../blocks/filter.service';
import {FilterTextComponent} from '../blocks/filter-text.component';
import {InitCapsPipe} from '../blocks/init-caps.pipe'
import {CharacterService} from '../core/character.service';
import {Character} from '../core/character';
import {SortCharactersPipe} from '../core/sort-characters.pipe'
import {Routes} from '../route.config';

@Component({
  selector: 'taba-characters',
  templateUrl: './app/characters/characters.component.html',
  directives: [CORE_DIRECTIVES, FilterTextComponent],
  styleUrls: ['./app/characters/characters.component.css'],
  pipes: [InitCapsPipe, SortCharactersPipe]
})
export class CharactersComponent implements OnInit {
  public filteredCharacters: Character[];
  public characters: Character[];
  public selectedCharacter: Character;
  public filterText = '';

  dataAsync: Promise<string>;

  constructor(private _filterService: FilterService,
    private _characterService: CharacterService, private _router: Router) {

    this.filteredCharacters = this.characters;
    this.dataAsync = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('data from promise');
      }, 500)
    });
  }

  getCharacters() {
    this.selectedCharacter = undefined;
    this.characters = [];
    this._characterService.getCharacters()
      .then(characters =>
        this.characters = this.filteredCharacters = characters
      );

    return this.characters;
  }

  getSelectedClass(character: Character) {
    return { 'selected': character === this.selectedCharacter };
  }

  goDetail() {
    //TODO: implement navigate() with the tuple
    this._router.navigateByUrl(`${Routes.detail.as.toLowerCase()}/${this.selectedCharacter.id}`);
  }

  onInit() { return this.characters = this.getCharacters(); }

  onSelect(character: Character) { this.selectedCharacter = character; }

  filterChanged(searchText: string) {
    this.filteredCharacters = this._filterService.filter(searchText, ['id', 'name'], this.characters);
  }
}
