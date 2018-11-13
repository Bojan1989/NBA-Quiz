import { Component, OnInit } from '@angular/core';
import { Question } from '../../../model/question';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  question: Question = {
    "question": "",
    "answer": "",
    "options": {
      "option1": "",
      "option2": "",
      "option3": "",
      "option4": ""
    }
  }

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  saveQuestion(){
    this.questionService.addQuestion(this.question).subscribe(res => {
      alert("New Question added");
    });
  }

}
