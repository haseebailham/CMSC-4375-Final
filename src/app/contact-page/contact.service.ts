import {Injectable} from '@angular/core';
// @ts-ignore
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  constructor(public db: AngularFirestore) {
  }

  createQuestion(value) {
    return this.db.collection('questions').add({
      name: value.name,
      email: value.email,
      type: 'Question',
      content: value.content
    });
  }

  createFeedback(value) {
    return this.db.collection('feedback').add({
      name: value.name,
      email: value.email,
      type: 'Feedback',
      content: value.content
    });
  }
}