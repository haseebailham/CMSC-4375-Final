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
  private stdAnswer: string;
  constructor(public db: AngularFirestore, public database:AngularFireDatabase) {

  }
  getUserQs() {
    return this.db.collection('userQs').snapshotChanges();
  }

  createUserQ(formValue){
    return this.db.collection('userQs').add({
      question: formValue.question,
      // answers: ''
    });
  }

  createUserAnswer(formValue, question:Question){
    const questionAnswer = this.db.collection('userQs').doc(question.key);

// Atomically add a new region to the "regions" array field.
    questionAnswer.update({
      answers: firebase.firestore.FieldValue.arrayUnion(formValue)
    });
    // const questionRef = this.db.collection('userQs').doc(question.key);
    // questionRef.set({answers:firebase.firestore.FieldValue.arrayUnion(formValue)},{merge:true});

    //other possibilities
    // this.db.collection('userQs').doc(question.key).update({'answers':formValue});
    // this.database.list('userQs/'+question.key+'/answers').push({formValue});
  // return this.db.collection('userQs/'+question.key).add({answers:formValue});
  //   this.db.doc('userQs/' + question.key).set({answers: formValue}, {merge: true});
  }

  getUserAnswers(question:Question) {
    return this.db.collection('userQs'+question.key+'/answers').snapshotChanges();
  }
  // addStandardAnswer( question:Question){
  //   this.stdAnswer = 'an answer has been added';
  //   this.db.doc('userQs/'+question.key).set({answers: this.stdAnswer}, {merge: true});
  // }
  }
