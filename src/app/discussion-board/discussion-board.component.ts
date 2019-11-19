import { Component, OnInit } from '@angular/core';
import {Question} from "../question";
import {AngularFireDatabase} from "@angular/fire/database";
import {DiscussionBoardService} from "../services/discussion-board.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css']
})
export class DiscussionBoardComponent implements OnInit {
questions: Question[];
  constructor(private discussionBoardService: DiscussionBoardService, private database: AngularFireDatabase, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.setLists();
  }

  setLists(){
    this.discussionBoardService.getUserQs().subscribe(data => {
      this.questions = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Question;
      });
    });
  }

  //need form for submitting questions and one for answering a question
}
