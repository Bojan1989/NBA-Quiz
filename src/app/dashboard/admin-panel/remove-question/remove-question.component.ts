import { Component, OnInit } from '@angular/core';
import { Question } from '../../../model/question';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.scss']
})
export class RemoveQuestionComponent implements OnInit {

  questions: any;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this.questionService.getAllQuestions().subscribe(res => {
      this.questions = res;
    })
  }

  deleteQuestion(id){
    this.questionService.removeQuestion(id).subscribe(emp => {
      this.getQuestions();
    });
  }

  refreshList(){
    this.getQuestions();
  }


}
