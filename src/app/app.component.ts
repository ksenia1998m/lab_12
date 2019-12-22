import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'База данных';
  
  persons: Person[] = [];
  
  constructor() {

  }
  
  ngOnInit(): void {
    this.persons.push(new Person('Сергей', 'Павлов', 1));
    this.persons.push(new Person('Екатерина', 'Иванов', 2));
    this.persons.push(new Person('Ирина', 'Белоус', 3));
    this.persons.push(new Person('Олег', 'Игонин', 4));
    this.persons.push(new Person('Марина', 'Кисилева', 5));
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    let newId = this.persons[this.persons.length - 1].id + 1;
    person.id = newId;
    this.persons.push(person);
  }
  
  onDeletePerson(inPerson) {
    this.persons.splice(this.persons.indexOf(inPerson), 1);
  }
  
}
