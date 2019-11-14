import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqPageComponent implements OnInit {
  questionForm: FormGroup;
  private questionList;
  constructor(private formBuilder: FormBuilder) {}
              // public faqService: Service) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      name: [''],
      email: [''],
      question: ['']
    });
    // @ts-ignore
    this.questionList = this.faqService.getQuestions().subscribe(res => (this.questionList = res));
  }
  readyForNextQuestion() {
    this.questionForm = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      question: new FormControl(''),
    });
  }
  // onClickAddQuestion(questionValue) {
  //   this.faqService.createQuestions(questionValue).then(r => {
  //     this.readyForNextQuestion();
  //   });
  // }
}
