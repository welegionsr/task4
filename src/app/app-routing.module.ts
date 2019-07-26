import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoresListComponent } from './chores-list/chores-list.component';

const routes: Routes = [
  {path: 'chores', component: ChoresListComponent},
  {path: '**', redirectTo: 'chores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
