import {Http} from 'angular2/http';
import {Character} from './character';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class CharacterService {
	constructor(private _http: Http) {}

	getCharacters(): Rx.IPromise<Character[]> {
		let promise = this._http.get('characters.json')
			.toRx().map((response: any) => response.json()).toPromise();
		return promise;
	}

    getCharacter(id: number) {
        let heroes: string[];
        heroes.length = 0;
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
