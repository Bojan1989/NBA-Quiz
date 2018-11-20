import { Component, OnInit } from '@angular/core';
import { Score } from '../../model/score';
import { Question } from '../../model/question';
import { ScoreService } from '../../services/score.service';
import { QuestionService } from '../../services/question.service';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  score: Score = {
    username: localStorage.getItem('username'),
    score: 0
  }

  gameStarted = false;
  gameOver = false;

  response: any;             // full response
  questions: Question;       // all questions

  qNum = 0;                  // used for selecting activeQuestion from question array
  activeQuestion: Question;  // one active question
  options = [];              // storing options from activeQuestion wich is Object type
  randomOptions = [];        // options array that is shuffled to get random order od options in array


  constructor(private scoreService: ScoreService, private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this.questionService.getAllQuestions().subscribe(res => {
      this.response = res;
      this.questions = this.shuffle(this.response.questions);
      this.setActiveQuestion();
    })
  }

  setActiveQuestion(){
    if (this.qNum <= 14) {
      this.qNum ++;
      this.activeQuestion = this.questions[this.qNum];
      this.options = [];
      Object.keys(this.activeQuestion.options).map(key => this.options.push(this.activeQuestion.options[key]));
      this.randomOptions = this.shuffle(this.options);
    }else {
      this.qNum = 0;
      this.gameOver = true;
    }
  }

  countScore(correct, answer){
    if (correct == answer) {
      this.score.score = this.score.score + 10;
    }
    setTimeout(() => {
      this.setActiveQuestion();
    }, 300);
  }

  startGame() {
    this.qNum = 0;
    this.getQuestions();
    setTimeout(() =>{
      this.score.score = 0;
      this.gameStarted = true;
      this.gameOver = false;
    }, 400);
  }

  saveScore(){
    this.scoreService.saveScore(this.score).subscribe(res => {
      alert("Rezultat uspesno sacuvan");
    });
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
