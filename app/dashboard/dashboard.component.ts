import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Character} from './../core/character';
import {CharacterService} from './../core/character.service';

@Component({
  selector: 'my-dashboard',
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public characters: Character[];

  constructor(private _characterService: CharacterService, private _router: Router) { }

	ngOnInit() {
    this.characters = this.getcharacters();
  }

  gotoDetail(character: Character) {
    this._router.navigate(['/CharacterDetail', { id: character.id }]);
  }

  getcharacters() {
    this.characters = [];

    this._characterService.getCharacters()
      .subscribe((characters: Character[]) => {
        this.characters = characters.slice(1,5);
      });
              // .then((characters: Character[]) => this.characters = characters);

    return this.characters;
  }
}
