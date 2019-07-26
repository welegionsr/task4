import { Injectable } from '@angular/core';
import { Sibling } from 'src/models/sibling.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {API_URL} from './app.module';

@Injectable({
    providedIn: 'root'
})
export class SiblingService {
    constructor(private httpClient: HttpClient) { }

    getSiblingsFromDb(): Observable<Sibling[]> {
        return this.httpClient.get<Sibling[]>(`${API_URL}/siblings`);
    }

}
