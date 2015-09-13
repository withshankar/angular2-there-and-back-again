import {Component, View} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Character} from '../core/character';
import {CharacterService} from '../core/character-service';
import {TABA_DIRECTIVES} from '../core/taba-directives';
import {Routes} from '../route-config';

@Component({selector: 'taba-character-detail'})
@View({
  templateUrl: './app/character-detail/character-detail-component.html',
  directives: [TABA_DIRECTIVES]
})
export class CharacterDetailComponent {
  character: Character = <Character>{};

  constructor(private _characterService: CharacterService,
    private _routeParams: RouteParams, private _router: Router) {

    let id = +_routeParams.get('id');
    this._characterService.getCharacter(id).then(character => this.character = character);
  }

  gotoCharacters() {
    this._router.navigate(`${Routes.characters.as}`);
  }
}
