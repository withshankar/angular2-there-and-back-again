import {View, Component} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';
import {Routes, APP_ROUTES} from './route-config';
import {TABA_DIRECTIVES} from './core/taba-directives';

@Component({ selector: 'taba-app' })
@View({
  template: `
    <a [router-link]="['/${Routes.dashboard.as}']">Dashboard</a>
    <a [router-link]="['/${Routes.characters.as}']">Characters</a>
    <router-outlet></router-outlet>
    `,
  directives: [TABA_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent { }
