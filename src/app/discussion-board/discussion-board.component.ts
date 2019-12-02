import {Component, OnInit} from '@angular/core';
import {Question} from "../question";
import {AngularFireDatabase} from "@angular/fire/database";
import {DiscussionBoardService} from "./discussion-board.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Answer} from "../Answer";

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
  theAnswers;
  loaded = false;

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
    // console.log("the initial thing is: "+formValue);
    let newAnswerValue = JSON.stringify(formValue);
    // console.log(newAnswerValue);
    let answerCollection = this.discussionBoardService.createUserAnswer(formValue, question);
    let answerArray = answerCollection.split(",");
    // console.log(answerArray);
    question.answerArray = answerArray;
    this.loaded =true;
    console.log(question.answerArray);
    this.answerForm.reset();
  }

  // getUserAnswers(question: Question) {
  //   this.theAnswers = this.discussionBoardService.getUserAnswers(question);
  // }
}



