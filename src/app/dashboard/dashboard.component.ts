import {Component, View} from 'angular2/angular2';
import {COMMON_DIRECTIVES} from '../core/constants';

@Component({ selector: 'taba-dashboard' })
@View({
    templateUrl: './app/dashboard/dashboard.component.html',
    directives: [COMMON_DIRECTIVES]
})
export class DashboardComponent {
    firstName = 'john';
    lastName = 'papa';
    city = 'orlando';
    addThing(thing: string) {
        console.log(`adding ${thing}`);
    }
}
