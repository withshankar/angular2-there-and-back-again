import {Http} from 'angular2/http';
import {Character} from './character';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class CharacterService {
	constructor(private _http: Http) {}

	getCharacters(): Promise<Character[]> {
		return this._http.get('app/characters.json')
			.toRx().map((response: any) => response.json()).toPromise();
	}

	getCharacter(id: number) {
		return this.getCharacters().then((characters) => { return characters.filter((c) => {
			return c.id === id;
		})[0]});
	}
}
	// getCharacters(id: number) {
	// 	return getCharacters().then((characters) => { return characters.filter((c) => {
	// 			return c.id === id;
	// 		})[0]});
	// }

	// getCharacters() { return Promise.resolve(CHARACTERS); }

	// getCharacter(id: number) {
	// 	return Promise.resolve(CHARACTERS)
	// 		.then((characters) => { return characters.filter((c) => {
	// 			return c.id === id;
	// 		})[0]});
	// }
