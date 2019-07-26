import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { NewChoreComponent } from './new-chore/new-chore.component';

const routes: Routes = [
  {path: 'chores', component: ChoresListComponent},
  {path: 'chores/add', component: NewChoreComponent},
  {path: '**', redirectTo: 'chores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
