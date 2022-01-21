import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  questionForm: FormGroup;
  question: string[] = ['option1', 'option2'];
  emailFormControl = new FormControl('');
  selected = 'option3';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      'questionFormControl': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.questionForm);
    if (this.questionForm.value.questionFormControl) {
      this.question.push(this.questionForm.value.questionFormControl);
      this.questionForm.reset();
    }
  }

  backToDataList() {
    this.router.navigate(['question-builder']);
  }
}
