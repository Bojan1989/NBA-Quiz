import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './dashboard/admin-panel/admin-panel.component';
import { ScoreboardComponent } from './dashboard/scoreboard/scoreboard.component';
import { GameComponent } from './dashboard/game/game.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing/dashboard-routing.module';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ScoreService } from './services/score.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddQuestionComponent } from './dashboard/admin-panel/add-question/add-question.component';
import { RemoveQuestionComponent } from './dashboard/admin-panel/remove-question/remove-question.component';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminPanelComponent,
    ScoreboardComponent,
    GameComponent,
    UserProfileComponent,
    AddQuestionComponent,
    RemoveQuestionComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    JwtHelperService,
    UserService,
    ScoreService,
    HttpClient,
    InterceptorService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
