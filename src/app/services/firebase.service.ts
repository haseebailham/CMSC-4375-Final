import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private value: any;

  constructor(public db: AngularFirestore) {
  }

  createRecipe(value) {
    return this.db.collection('recipes').add({
      username: value.username,
      recipeName: value.recipeName,
      // description: value.description,
      // foodType: value.foodType,
      // difficulty: value.difficulty,
      // numberOfServings: parseInt(value.numberOfServings),
      // prepTime: parseInt(value.prepTime),
      // cookingTime: parseInt(value.cookingTime),
      // ingredients: value.ingredients,
      // directions: value.directions
    });
  }
}
