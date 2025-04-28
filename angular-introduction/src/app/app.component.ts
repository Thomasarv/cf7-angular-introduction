import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name= "Thomas";


  //Step 1: One way binding of data
  // person  = {
  //   givenName: 'Thomas',
  //   surName: 'Arvaniths',
  //   age:20,
  //   email: 'thomas99arv@gmail.com'
  // }

  //Step 3: Component Input
//   person0: Person = {
//     givenName: "Christodoulos",
//     surName: "Fragkoudakis",
//     age:55,
//     email: "chfrag@aueb.gr",
//     address: "Athens,Greece"    
//  }

 
}