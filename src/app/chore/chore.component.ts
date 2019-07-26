import { Component, Input } from '@angular/core';
import { Chore } from 'src/models/chore.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-chore',
  templateUrl: './chore.component.html',
  styleUrls: ['./chore.component.css']
})
export class ChoreComponent {
  @Input() chore: Chore;

  constructor (private store: StoreService){

  }

  deleteChore(chore) {
    console.log('gonna delete ' + chore._id);
    this.store.deleteChore(chore);
  }

}
