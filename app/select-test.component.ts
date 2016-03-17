import {Component, Injectable, OnInit} from 'angular2/core'

@Injectable()
class PetStoreService {
  pets = [
    {id: 1, name: 'max'},
    {id: 2, name: 'princess'},
    {id: 3, name: 'wesley'}
  ];
}


import { Input, Output } from 'angular2/core'


@Component({
  selector: 'selector',
  template: `
      <select (change)="onChange($event)">
        <option *ngFor="#opt of options"
          [value]="opt[key]"
          [selected]="isSelected(opt)"
        >{{opt[display]}}</option>
      </select>
      {{selectedOption | json}}
  `
})
export class SelectorComponent {
  @Input() options: any[];
  @Input() key: string;
  @Input() display: string;
  @Output() change: any;

  value: any;
  selectedOption: any;

  isSelected(opt: any) {
    return opt[this.key] === this.options ? this.options[this.key] : undefined;
  }

  onChange(event: any){
    let id = event.target.value;
    this.selectedOption = this.options.filter(p => p[this.key] === +id)[0]
  }
}

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h3>List of pets</h3>
    </div>
    <div>
      <select (change)="onChange($event)">
        <option *ngFor="#pet of pets"
          [value]="pet.id"
          [selected]="isSelected(pet)"
        >{{pet.name}}</option>
      </select>
      <p>Selected Pet</p>
      <pre>{{selectedPet | json}}</pre>
      <p>Selected pet name = {{selectedPet?.name}}</p>
    </div>
    <button (click)="reload()">Reload</button>
    <button (click)="clear()">Clear</button>
    <button (click)="removeSelected()">Remove</button>

  <selector key="id"
    [options]="pets"
    display="name"
    (change)="selectedPet=$event"></selector>
  `,
  styles: [`
    pre {background: #EEE; padding: 4px}
    select {width: 100px}
    button {width: 75px}
  `],
  providers: [PetStoreService],
  directives: [SelectorComponent]
})
export class AppComponent implements OnInit {
  pets: any[];
  selectedPet:any;

  constructor(private _store: PetStoreService) {
    this.pets = this._store.pets.slice(0);
  }

  ngOnInit() {
    this.reload();
  }

  isSelected(pet: any) {
    return pet.id === this.selectedPet ? this.selectedPet.id : undefined;
  }

  onChange(event: any){
    let id = event.target.value;
    this.selectedPet = this.pets.filter(p => p.id === +id)[0]
  }

  clear() {
    this.pets = undefined;
    this.selectedPet = undefined;
  }

  reload() {
    this.pets = this._store.pets.slice(0);
    this.selectedPet = this.pets[0];
  }

  removeSelected() {
    if (this.pets && this.selectedPet) {
      let index = this.pets.indexOf(this.selectedPet);
      this.pets.splice(index, 1);
      this.selectedPet = this.pets[0];
    }
  }
}




