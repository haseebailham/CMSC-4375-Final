import {Component, OnInit} from '@angular/core';
import {Question} from "../question";
import {AngularFireDatabase} from "@angular/fire/database";
import {DiscussionBoardService} from "./discussion-board.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css']
})
export class DiscussionBoardComponent implements OnInit {
  questions: Question[];
  questionForm: FormGroup;
  answerForm: FormGroup;
  private value: any;
  private stdAnswer: string;
  private theAnswers;

  constructor(private discussionBoardService: DiscussionBoardService, private database: AngularFireDatabase, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.setLists();
    this.userQForm();
    this.userAnswerForm();
  }

  setLists() {
    this.discussionBoardService.getUserQs().subscribe(data => {
      this.questions = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Question;
      });
    });
  }

  userQForm() {
    this.questionForm = this.formBuilder.group({
      question: [''],
    });
  }

  readyForNextQ() {
    this.questionForm = this.formBuilder.group({
      question: new FormControl(''),
    });
  }

  submitUserQ(formValue) {
    this.discussionBoardService.createUserQ(formValue)
      .then(
        r => {
          this.readyForNextQ();
        }
      );

  }

  userAnswerForm() {
    this.answerForm = this.formBuilder.group({
      answers: [''],
    });
  }

  readyForNextAnswer() {
    this.answerForm = this.formBuilder.group({
      answers: new FormControl(''),
    });
  }

  submitUserAnswer(formValue, question: Question) {
    this.discussionBoardService.createUserAnswer(formValue, question);
    question.userProvidedAnswers.push(formValue);
    // .then(
    //   r => {
    //     this.readyForNextAnswer();
    //   }
    // );
// this.getUserAnswers(question);
  }

  getUserAnswers(question: Question) {
    this.theAnswers = this.discussionBoardService.getUserAnswers(question);
  }
}



