import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  personArr: Person[] = [
    new Person('Joshua', 'Kornmayer', 23),
    new Person('Albert', 'Einstein', 106),
  ];

  constructor(private http: HttpClient) {}

  getPerson(): Person[] {
    return this.personArr.filter((person) => {
      return (
        'Name: ' +
        person.getFirstName() +
        ' ' +
        person.getLastName() +
        ', Age: ' +
        person.getAge()
      );
    });
  }
}
