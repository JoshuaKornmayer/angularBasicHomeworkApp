import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPerson();
  }

  get peopleList(): Person[] {
    return this.peopleService.getPerson();
  }
}
