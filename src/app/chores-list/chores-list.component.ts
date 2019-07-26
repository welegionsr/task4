import { Component, OnInit } from "@angular/core";
import { StoreService } from '../store.service';

@Component({
  selector: "app-chores-list",
  templateUrl: "./chores-list.component.html",
  styleUrls: ["./chores-list.component.css"]
})
export class ChoresListComponent implements OnInit {
  constructor(public store: StoreService) {}

  ngOnInit() {
    this.store.getSiblings();
    this.store.getChores();
  }
}
