import {CHARACTERS} from './mock-characters';

export class CharacterService {
	getCharacters() { return Promise.resolve(CHARACTERS); }

	getCharacter(id: number) {
		return Promise.resolve(CHARACTERS)
			.then((characters) => { return characters.filter((c) => {
				return c.id === id;
			})[0]});
	}
}
