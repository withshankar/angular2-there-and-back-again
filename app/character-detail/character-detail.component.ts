import {Component, OnChanges, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Character} from '../core/character';
import {CharacterService} from '../core/character.service';

@Component({
  selector: 'taba-character-detail',
  templateUrl: './app/character-detail/character-detail.component.html',
  inputs: ['character']
})
export class CharacterDetailComponent implements OnChanges, OnInit {
  character: Character;

  constructor(private _characterService: CharacterService,
    private _routeParams: RouteParams, private _router: Router) { }

  gotoCharacters() {
    //TODO: implement navigate() with the tuple
    this._router.navigate(['Characters']);
  }

  ngOnChanges(changes: any) {
    // On every change of the inputs
    console.log(changes);
  }

  ngOnInit() {
    if (!this.character) {
      let id = +this._routeParams.get('id');
      this._characterService.getCharacter(id)
        .subscribe((character: Character) => {
          this.character = character;
        });

        // .then(character => this.character = character);
    }
  }
}
