import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnChanges, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Character} from '../core/character';
import {CharacterService} from '../core/character.service';
import {ROUTE_NAMES} from '../routes';

@Component({
  selector: 'taba-character-detail',
  templateUrl: './app/character-detail/character-detail.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  inputs: ['character']
})
export class CharacterDetailComponent implements OnChanges, OnInit {
  character: Character;

  constructor(private _characterService: CharacterService,
    private _routeParams: RouteParams, private _router: Router) { }

  gotoCharacters() {
    //TODO: implement navigate() with the tuple
    this._router.navigateByUrl(`${ROUTE_NAMES.characters.toLowerCase()}`);
  }

  ngOnChanges(changes: any) {
    // On every change of the inputs
    console.log(changes);
  }

  ngOnInit() {
    if (!this.character) {
      let id = +this._routeParams.get('id');
      this._characterService.getCharacter(id).then(character => this.character = character);
    }
  }
}
