import {Injectable} from '@angular/core';
// @ts-ignore
import {AngularFirestore} from '@angular/fire/firestore';
import {Recipe} from '../recipe';
import {Question} from "../question";
import {AngularFireDatabase} from "@angular/fire/database";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})

export class DiscussionBoardService {
  private answersFromDB;
  constructor(public db: AngularFirestore, public database:AngularFireDatabase) {

  }
  getUserQs() {
    return this.db.collection('userQs').snapshotChanges();
  }

  createUserQ(formValue){
    return this.db.collection('userQs').add({
      question: formValue.question,
      answers:""
    });
  }

  createUserAnswer(formValue, question:Question): string{
    this.answersFromDB = (question.answers+'One user answered: '+formValue+'. ');
    this.db.doc('userQs/' + question.key).set({answers: this.answersFromDB}, {merge: true});
    return this.answersFromDB;
  }
}
