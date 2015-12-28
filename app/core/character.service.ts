import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Character} from './character';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {
	characters: Character[] = [];

	constructor(private _http: Http) {}

  logError(err: any) {
    console.error('There was an error: ' + err);
  }

	getCharacters() { //} : Subscription<Character[]> {
		// this._http.get('people.json').toRx().subscribe((res: any) => {
		// 	this.people = res.json();
		// });

		this.characters.length = 0;
    return this._http.get('characters.json')
      .map((response: Response) => response.json())
      // .subscribe(
      //   data => this.characters.push(...data),
      //   err => this.logError(err),
      //   () => console.log('Random Quote Complete')
      // );
      // Worked prior to beta
      // .toPromise(null)
  		// .then((characters: Character[]) => {
			// 	this.characters.push(...characters);
			// 	return this.characters;
			// })
      // .then((_: any) => _, (e: any) => this._fetchFailed(e));
  		// return promise;


  		// //TODO: fix catch
			// //.catch(e => this._fetchFailed(e)) // want we want to say
			// // baroque way to ensure promise stays Promise<Hero[]>
			// .then<Character[]>(_ => _, e => this._fetchFailed(e));

	}

	private _fetchFailed(error:any) {
		console.error(error);
		return Promise.reject(error);
	}
    // this._characterService.getCharacters()
    //   .subscribe((characters: Character[]) => {
    //     this.characters = characters.slice(1,5);
    //   });

  getCharacter(id: number) {
    return this._http.get('characters.json')
      .map((response: Response) => {
        return response.json().filter((c: Character) => { return c.id === id; })[0]
        // response.json();
      })

    // return this.getCharacters()
    //   .subscribe((characters: Character[]) =>
    //     characters.filter((c) => { return c.id === id; })[0]
    //   //this.character = characters;
    // );
    // .then((characters) => { return characters.filter((c) => {return c.id === id;})[0]});
	}
}
