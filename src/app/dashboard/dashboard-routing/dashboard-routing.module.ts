import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from "../admin-panel/admin-panel.component";
import { GameComponent } from "../game/game.component";
import { ScoreboardComponent } from "../scoreboard/scoreboard.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { DashboardComponent } from "../dashboard.component";
import { RouteGuard } from '../../guards/route.guard';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children:
    [
        { path: 'admin-panel', canActivate:[RouteGuard], component: AdminPanelComponent },
        { path: 'nba-quiz', canActivate:[RouteGuard], component: GameComponent },
        { path: 'scoreboard', canActivate:[RouteGuard], component: ScoreboardComponent },
        { path: 'profile', canActivate:[RouteGuard],component: UserProfileComponent },
        { path: '' , redirectTo: 'profile', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: []
})
export class DashboardRoutingModule { }
