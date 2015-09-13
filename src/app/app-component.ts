import {View, Component} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';
import {Routes, APP_ROUTES} from './route-config';
import {CHARACTER_DIRECTIVES} from './character-directives';

@Component({ selector: 'my-app' })
@View({
  template: `
    <a [router-link]="['/${Routes.dashboard.as}']">Dashboard</a>
    <a [router-link]="['/${Routes.characters.as}']">Characters</a>
    <router-outlet></router-outlet>
    `,
  directives: [CHARACTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent { }
