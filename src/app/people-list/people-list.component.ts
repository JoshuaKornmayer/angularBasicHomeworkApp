import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  peeps: Person[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeeps();
  }

  getPeeps(): void {
    this.peopleService.getPerson().subscribe((response) => {
      this.peeps = response;
      console.log('it works!');
    });
  }
}
