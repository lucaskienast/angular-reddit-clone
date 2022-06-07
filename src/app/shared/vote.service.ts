import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VotePayload} from "./vote-button/vote-payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private httpClient: HttpClient) { }

  vote(votePayload: VotePayload): Observable<object> {
    return this.httpClient.post('http://localhost:8080/api/votes/', votePayload);
  }
}
