import { Component, Inject } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';

@Component({
    selector: 'app-component-output-example',
    imports: [DialogModule, SimpleDatatableComponent],
    templateUrl: './component-output-example.component.html',
    styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  constructor(public dialog: Dialog) {}

  onPersonClicked(person: EPerson) {
    this.dialog.open(PersonDialogComponent, {
      data: person,
    });
  }

  personTemplate(person: EPerson) {
    return `
    Person Details:

    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Education: ${person.education}
    `;
  }
}

@Component({
    imports: [PersonTableComponent],
    template: `
    <app-person-table [person]="person"></app-person-table>
    <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">
      Close
    </button>
  `,
    styles: [
        `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px;
      }
    `,
    ]
})
export class PersonDialogComponent {
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public person: EPerson,
  ) {}
}
