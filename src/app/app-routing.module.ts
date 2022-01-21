import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ForgetPasswordComponent } from './login-user/forget-password/forget-password.component';
import { QuestionComponent } from './question/question.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FormCreateComponent } from './form-create/form-create.component';


const routes: Routes = [
  {

    path: 'login',
    component: LoginUserComponent

  },
  {
    path: 'question-builder',
    component: QuestionComponent
  },
  {
    path: 'show-info',
    component: ShowDetailsComponent
  },
  {
    path: 'add-form',
    component: FormCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents=[LoginUserComponent,ForgetPasswordComponent]
