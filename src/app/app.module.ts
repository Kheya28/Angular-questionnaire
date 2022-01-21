import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUserComponent } from './login-user/login-user.component';
import { ForgetPasswordComponent } from './login-user/forget-password/forget-password.component';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common"
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FormCreateComponent } from './form-create/form-create.component';

//import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    ForgetPasswordComponent,
    QuestionComponent,
    ShowDetailsComponent,
    FormCreateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
