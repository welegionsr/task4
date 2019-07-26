import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "./app.module";
import { Chore } from "src/models/chore.model";

@Injectable({
  providedIn: "root"
})
export class ChoreService {
  constructor(private httpClient: HttpClient) {}

  getChoresFromDb(): Observable<Chore[]> {
    return this.httpClient.get<Chore[]>(`${API_URL}/chores`);
  }

  addChoreToDb(chore: Chore): Observable<Chore> {
    return this.httpClient.post<Chore>(`${API_URL}/chores`, chore);
  }
}
