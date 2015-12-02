import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Character} from '../core/character';
import {CharacterDetailComponent} from '../character-detail/character-detail.component';
import {CharacterService} from '../core/character.service';
import {FilterService} from '../blocks/filter.service';
import {FilterTextComponent} from '../blocks/filter-text.component';
import {InitCapsPipe} from '../blocks/init-caps.pipe'
import {ROUTE_NAMES} from '../routes';
import {SortCharactersPipe} from '../core/sort-characters.pipe'

@Component({
  selector: 'taba-characters',
  templateUrl: './app/characters/characters.component.html',
  directives: [CharacterDetailComponent, CORE_DIRECTIVES, FilterTextComponent],
  styleUrls: ['./app/characters/characters.component.css'],
  pipes: [InitCapsPipe, SortCharactersPipe]
})
export class CharactersComponent implements OnInit {
  public characters: Character[];
  public filteredCharacters = this.characters;
  public selectedCharacter: Character;
  public filterText = '';

  constructor(private _filterService: FilterService,
    private _characterService: CharacterService, private _router: Router) { }

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
    this._router.navigateByUrl(`${ROUTE_NAMES.characterDetail.toLowerCase()}/${this.selectedCharacter.id}`);
  }

  ngOnInit() { return this.characters = this.getCharacters(); }

  onSelect(character: Character) { this.selectedCharacter = character; }

  filterChanged(searchText: string) {
    this.filteredCharacters = this._filterService.filter(searchText, ['id', 'name'], this.characters);
  }
}
