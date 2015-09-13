import {Component, View} from 'angular2/angular2';
import {TABA_DIRECTIVES} from '../core/taba-directives';

@Component({ selector: 'taba-dashboard' })
@View({
	templateUrl: './app/dashboard/dashboard-component.html',
  directives: [TABA_DIRECTIVES]
})
export class DashboardComponent {
	firstName = 'john';
	lastName = 'papa';
	city = 'orlando';
	addThing(thing: string) {
		console.log(`adding ${thing}`);
	}
}
