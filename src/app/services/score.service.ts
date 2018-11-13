import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Score } from "../model/score";

 const scoreUrl = "https://nba-quiz-api-ns.herokuapp.com/score";
 const userScoreUrl = "https://nba-quiz-api-ns.herokuapp.com/score/user";

// http://localhost:3000/

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }

  saveScore(score: Score) {
    return this.http.post(scoreUrl, score).pipe(map(res => {
      return new Score(res);
    }));
  }

  getAllScores(params) {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', params.page && params.page.toString() || '1')
          .set('pageSize', params.pageSize && params.pageSize.toString() || '5')
      }
    }
    return this.http.get(scoreUrl, queryParams).pipe(map(res => {
      return res;
    }));
  }

  getUserScores(params) {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', params.page && params.page.toString() || '1')
          .set('pageSize', params.pageSize && params.pageSize.toString() || '5')
      }
    }
    return this.http.get(userScoreUrl, queryParams).pipe(map(res => {
      return res;
    }));
  }

}
