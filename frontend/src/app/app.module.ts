import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin-dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './admin-dashboard/question/question.component';
import { HeaderPageComponent } from './admin-dashboard/header-page/header-page.component';
import { HomePageComponent } from './admin-dashboard/home-page/home-page.component';
import { CategoriesComponent } from './admin-dashboard/categories/categories.component';
import { NewQuizComponent } from './user-dashboard/new-quiz/new-quiz.component';
import { UserHomeComponent } from './user-dashboard/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    QuestionComponent,
    HeaderPageComponent,
    HomePageComponent,
    CategoriesComponent,
    NewQuizComponent,
    UserDashboardComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
