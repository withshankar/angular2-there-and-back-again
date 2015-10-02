import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({ selector: 'taba-dashboard' })
@View({
    templateUrl: './app/dashboard/dashboard.component.html',
    directives: [FORM_DIRECTIVES]
})
export class DashboardComponent {
    firstName = 'john';
    lastName = 'papa';
    city = 'orlando';
    addThing(thing: string) {
        console.log(`adding ${thing}`);
    }
}
