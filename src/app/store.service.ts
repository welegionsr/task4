import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ChoreService } from "./chore.service";
import { Chore } from "src/models/chore.model";
import { Sibling } from "src/models/sibling.model";
import { SiblingService } from "./sibling.service";

export interface IState {
  chores: Chore[];
  siblings: Sibling[];
}

const initialState: IState = {
  chores: [],
  siblings: []
};

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private readonly _store = new BehaviorSubject<IState>(initialState);
  constructor(
    private choreService: ChoreService,
    private siblingService: SiblingService
  ) {}

  get currentState(): IState {
    return this._store.getValue();
  }

  setState(newState: Partial<IState>) {
    this._store.next({
      ...this.currentState,
      ...newState
    });
  }

  getChores() {
    this.choreService.getChoresFromDb().subscribe(chores => {
      this.setState({
        chores
      });
    });
  }

  get chores(): Chore[] {
    return this.currentState.chores;
  }

  get siblings(): Sibling[] {
    return this.currentState.siblings;
  }

  getSiblings() {
    this.siblingService.getSiblingsFromDb().subscribe(siblings => {
      this.setState({
        siblings
      });
    });
  }

  addChore(chore: Chore) {
    chore.date = new Date(Date.now());
    console.log("this is sent to the DB:");
    console.log(chore);
    return this.choreService.addChoreToDb(chore).subscribe(choreFromDb => {
      this.setState({
        chores: this.chores.concat(choreFromDb)
      });
    });
  }

  deleteChore(chore: Chore) {
    return this.choreService.deleteChoreFromDb(chore).subscribe(choreFromDb => {
      this.setState({
        chores: this.chores.filter((chore) => chore._id !== choreFromDb._id)
      });
    });
  }
}
