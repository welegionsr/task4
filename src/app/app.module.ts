import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule} from '@angular/material';
import { ChoreComponent } from './chore/chore.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { NewChoreComponent } from './new-chore/new-chore.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


export const API_URL = "http://localhost:3000";

@NgModule({
  declarations: [
    AppComponent,
    ChoreComponent,
    ChoresListComponent,
    NewChoreComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
