import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Character} from './../core/character';
import {CharacterService} from './../core/character.service';
import {Routes} from './../route.config';

@Component({ selector: 'my-dashboard' })
@View({
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DashboardComponent implements OnInit {
	public characters: Character[];

  constructor(private _characterService: CharacterService, private _router: Router) { }

	onInit() { this.characters = this.getcharacters(); }

  gotoDetail(character: Character) {
    this._router.navigate([`/${Routes.detail.as}`, { id: character.id }]);
  }

  getcharacters() {
    this.characters = [];

    this._characterService.getCharacters()
      .then((characters: Character[]) => this.characters = characters);

    return this.characters;
  }
}
