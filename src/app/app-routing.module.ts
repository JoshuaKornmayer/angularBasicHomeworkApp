import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompDefaultComponent } from './comp-default/comp-default.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  { path: 'comp-default', component: CompDefaultComponent },
  { path: 'two', component: CompTwoComponent },
  { path: 'one', component: CompOneComponent },
  { path: 'people', component: PeopleListComponent },
  // { path: '', redirectTo: '/comp-default', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
