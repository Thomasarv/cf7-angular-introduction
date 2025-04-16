import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name= "Thomas";

  person = {
    givenName: 'Thomas',
    surName: 'Arvaniths',
    age:20,
    email: 'thomas99arv@gmail.com'
  }
}
