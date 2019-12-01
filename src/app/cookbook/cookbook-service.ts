import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Recipe } from '../recipe';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable ({
  providedIn: 'root'
})
export class CookbookService {
  constructor(public db: AngularFirestore, public authdb: AngularFireAuth) {
  }

  user = this.authdb.auth.currentUser;

  createCookbook(title) {
    return this.db.collection('Users').doc(this.user.uid).collection(title);
  }

  getCookbookList() {
    return this.db.collection('Users').doc(this.user.uid).collection('Cookbook');
  }

  viewCookbook() {
    return this.db.collection('Users').doc(this.user.uid).collection('Cookbook').doc();
  }

  addRecipe(recipe: Recipe) {
    return this.db.collection('Users').doc(this.user.uid).collection('Cookbook').add({recipe});
  }
}


