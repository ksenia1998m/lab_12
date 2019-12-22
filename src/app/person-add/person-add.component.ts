import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  onAddPerson(inputFirstname, inputLastname, saveButton) {
    let person = new Person(inputFirstname.value, inputLastname.value);
    inputFirstname.value = "";
    inputLastname.value = "";
    saveButton.disabled = true;
    this.addperson.emit(person);
  } 

  onValidate(inputFirstname, inputLastname, saveButton) {
    if (inputFirstname.value != "" && inputLastname.value != "") {
      saveButton.disabled = false;
    }
  }
}
