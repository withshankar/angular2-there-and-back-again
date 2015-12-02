import {Http} from 'angular2/http';
import {Character} from './character';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class CharacterService {
	characters: Character[] = [];

	constructor(private _http: Http) {}

	getCharacters(): Promise<Character[]> {
		// this._http.get('people.json').toRx().subscribe((res: any) => {
		// 	this.people = res.json();
		// });

		this.characters.length = 0;
    let promise = this._http.get('characters.json')
      .map((response: any) => response.json()).toPromise(null)
  		.then((characters: Character[]) => {
				this.characters.push(...characters);
				return this.characters;
			})

  		// //TODO: fix catch
			// //.catch(e => this._fetchFailed(e)) // want we want to say
			// // baroque way to ensure promise stays Promise<Hero[]>
			// .then<Character[]>(_ => _, e => this._fetchFailed(e));

      .then((_: any) => _, (e: any) => this._fetchFailed(e));

  		return promise;
	}

	private _fetchFailed(error:any) {
		console.error(error);
		return Promise.reject(error);
	}

	getCharacter(id: number) {
		return this.getCharacters().then((characters) => { return characters.filter((c) => {
			return c.id === id;
		})[0]});
	}
}
