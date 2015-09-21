import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export var Routes = {
	dashboard: {
		path: '/',
		as: 'dashboard',
		component: DashboardComponent
	},
	characters: {
		path: '/characters',
		as: 'characters',
		component: CharactersComponent
	},
	detail: {
		path: '/detail/:id',
		as: 'detail',
		component: CharacterDetailComponent
	}
};

export const APP_ROUTES = [
	this.Routes.dashboard,
	this.Routes.detail,
	this.Routes.characters
];
