import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Recipe } from '../recipe';
import {User} from 'firebase';

@Injectable ({
  providedIn: 'root'
})
export class CookbookService {
  constructor(public db: AngularFirestore) {
  }

  async createCookbook(user: User, title) {
    return this.db.collection('Users').doc(await user.getIdToken()).collection(title);
  }

  async getCookbookList(user: User) {
    return this.db.collection('Users').doc(await user.getIdToken()).collection('Cookbooks');
  }

  async viewCookbook(user: User) {
    return this.db.collection('Users').doc(await user.getIdToken()).collection('Cookbooks').doc();
  }

  async addRecipe(user: User, title, recipe: Recipe) {
    return this.db.collection('Users').doc(await user.getIdToken()).collection(title).add({recipe});
  }
}


