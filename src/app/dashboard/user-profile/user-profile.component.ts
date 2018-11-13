import { Component, OnInit } from '@angular/core';
import { Score } from '../../model/score';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  username: String = localStorage.getItem('username');
  params= {
    page: 1,
    pageSize: 10
  }
  userScores;

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.getUserScores();
  }

  getUserScores(){
    this.scoreService.getUserScores(this.params).subscribe(res => {
      this.userScores = res;
    })
  }

}
