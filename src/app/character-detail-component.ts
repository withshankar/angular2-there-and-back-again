import {Component, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Character} from './character';
import {CharacterService} from './character-service';
import {CHARACTER_DIRECTIVES} from './character-directives';

@Component({selector: 'my-character-detail'})
@View({
  templateUrl: 'app/character-detail-component.html',
  directives: [CHARACTER_DIRECTIVES]
})
export class CharacterDetailComponent {
  character: Character;

  constructor(private _characterService: CharacterService, private _routeParams: RouteParams) {
    let id = +_routeParams.get('id');
    this._characterService.getCharacter(id).then(character => this.character = character);
  }
}
