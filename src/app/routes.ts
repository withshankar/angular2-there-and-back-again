import {RouteDefinition} from 'angular2/router';
import {BindingComponent} from './binding/binding.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const ROUTE_NAMES = {
  dashboard: 'Dashboard',
  binding:   'Binding',
  characters: 'Characters',
  characterDetail: 'CharacterDetail'
}

export const ROUTES: RouteDefinition[] = [
  { path: '/', redirectTo: [ROUTE_NAMES.dashboard] },
  { path: '/dashboard', name: ROUTE_NAMES.dashboard, component: DashboardComponent	},
	{ path: '/binding', name: ROUTE_NAMES.binding, component: BindingComponent	},
	{ path: '/characters', name: ROUTE_NAMES.characters, component: CharactersComponent	},
	{ path: '/detail/:id', name: ROUTE_NAMES.characterDetail, component: CharacterDetailComponent }
];
