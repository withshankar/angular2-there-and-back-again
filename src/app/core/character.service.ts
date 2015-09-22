import {Http} from 'angular2/http';
import {Character} from './character';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class CharacterService {
	characters: Character[] = [];

	constructor(private _http: Http) {}

	getCharacters(): Rx.IPromise<Character[]> {
		this.characters.length = 0;
		let promise = this._http.get('characters.json')
			.toRx().map((response: any) => response.json()).toPromise()
			.then(characters => {
				this.characters.push(...characters);
				return this.characters;
			})
			//TODO: fix catch
			//.catch(e => this._fetchFailed(e)) // want we want to say
			// baroque way to ensure promise stays Promise<Hero[]>
			.then<Character[]>(_ => _, e => this._fetchFailed(e));
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
