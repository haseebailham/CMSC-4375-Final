import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    content: new FormControl(''),
  });

  submitQuestion(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('questions')
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
}
