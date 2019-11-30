import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  constructor(public db: AngularFirestore) {}

  createContact(value) {
    if (value.type === ['Question']) {
      return this.db.collection('questions').add({
        name: value.name,
        email: value.email,
        type: 'Question',
        content: value.content
      });
    } else if (value.type === ['Feedback']) {
      return this.db.collection('feedback').add({
        name: value.name,
        email: value.email,
        type: 'Feedback',
        content: value.content
      });
    }
  }
}
