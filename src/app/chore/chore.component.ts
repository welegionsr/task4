import { Component, Input } from '@angular/core';
import { Chore } from 'src/models/chore.model';

@Component({
  selector: 'app-chore',
  templateUrl: './chore.component.html',
  styleUrls: ['./chore.component.css']
})
export class ChoreComponent {
  @Input() chore: Chore;

}
