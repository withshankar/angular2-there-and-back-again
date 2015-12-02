import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Character} from './../core/character';
import {CharacterService} from './../core/character.service';
import {ROUTE_NAMES} from './../routes';

@Component({
  selector: 'my-dashboard',
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DashboardComponent implements OnInit {
	public characters: Character[];

  constructor(private _characterService: CharacterService, private _router: Router) { }

	ngOnInit() { this.characters = this.getcharacters(); }

  gotoDetail(character: Character) {
    this._router.navigate([`/${ROUTE_NAMES.characterDetail}`, { id: character.id }]);
  }

  getcharacters() {
    this.characters = [];

    this._characterService.getCharacters()
      .then((characters: Character[]) => this.characters = characters);

    return this.characters;
  }
}
