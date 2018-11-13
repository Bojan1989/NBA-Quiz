import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Question } from "../model/question";

//const questionUrl = "https://nba-quiz-api.herokuapp.com/question";

const questionUrl = "http://localhost:3000/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestion(question: Question){
    return this.http.post(questionUrl, question).pipe(map(res => {
      return new Question(res);
    }))
  }

  getAllQuestions() {
    return this.http.get(questionUrl).pipe(map(res => {
    return res;
    }));
  }

  removeQuestion(id) {
    return this.http.delete<Question>(questionUrl + "/" + id );
  }

}
