import {BindingComponent} from './binding/binding.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export var Routes = {
	dashboard: {
		path: '/',
		as: 'Dashboard',
		component: DashboardComponent
	},
	binding: {
		path: '/binding123',
		as: 'Binding',
		component: BindingComponent
	},
	characters: {
		path: '/characters',
		as: 'Characters',
		component: CharactersComponent
	},
	detail: {
		path: '/detail/:id',
		as: 'Detail',
		component: CharacterDetailComponent
	}
};

export const APP_ROUTES = [
	this.Routes.binding,
	this.Routes.dashboard,
	this.Routes.detail,
	this.Routes.characters
];
