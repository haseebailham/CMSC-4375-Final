import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable ({
  providedIn: 'root'
})
export class BlogService {

  constructor(public db: AngularFirestore, public authdb: AngularFireAuth) {
  }

  getBlogTitles() {
    return this.db.collection('blogs').snapshotChanges();
  };

}
