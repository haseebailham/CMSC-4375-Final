import {Injectable} from '@angular/core';
// @ts-ignore
import {AngularFirestore} from '@angular/fire/firestore';
import {Recipe} from '../recipe';

@Injectable({
  providedIn: 'root'
})

export class DiscussionBoardService {
  constructor(public db: AngularFirestore) {

  }
  getUserQs() {
    return this.db.collection('userQs').snapshotChanges();
  }
  }
