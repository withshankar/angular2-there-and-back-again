import { Component, Input, OnChanges, OnInit } from 'angular2/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Character } from '../characters/character';
import { CharacterService } from '../characters/character.service';
import { CONFIG } from '../config';

@Component({
  selector: 'taba-character-detail',
  templateUrl: 'app/characters/character-detail.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CharacterDetailComponent implements OnChanges, OnInit {
  @Input()
  public character: Character;

  constructor(private _characterService: CharacterService,
    private _routeParams: RouteParams, private _router: Router) { }

  gotoCharacters() {
    this._router.navigate(['Characters']);
  }

  ngOnChanges(changes: any) {
    // On every change of the inputs
    console.log(changes);
  }

  ngOnInit() {
    if (!this.character) {
      let id = +this._routeParams.get('id');

      if (CONFIG.useHttpWithRx) {
        this._characterService.getCharacter(id)
          .subscribe((character: Character) => {
            this.character = character;
          });
      } else {
        this._characterService.getCharacter_ViaPromise(id)
          .then(character => this.character = character);
      }
    }
  }
}
