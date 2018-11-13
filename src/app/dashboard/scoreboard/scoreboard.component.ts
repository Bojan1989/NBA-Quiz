import { Component, OnInit } from '@angular/core';
import { Score } from '../../model/score';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  response: any;
//  scores;
  params= {
    page: 1,
    pageSize: 10
  }

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.getScores();
  }

  getScores(){
    this.scoreService.getAllScores(this.params).subscribe(res => {
      this.response = res;
      console.log(this.response);
    })
  }



}
