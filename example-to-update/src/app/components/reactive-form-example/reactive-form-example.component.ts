import { Component } from '@angular/core';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
    selector: 'app-reactive-form-example',
    imports: [
        EpersonReactiveFormComponent,
        PersonTableComponent,
        SimpleDatatableComponent,
    ],
    templateUrl: './reactive-form-example.component.html',
    styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  currentPerson: EPerson;
  persons: EPerson[] = [];

  onPerson(person: EPerson) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
