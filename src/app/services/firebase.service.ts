import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Recipe} from '../recipe';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private value: any;
  private likeComment;
  private likedCount: number;
  constructor(public db: AngularFirestore) {
  }

  getRecipes() {
    return this.db.collection('recipes').snapshotChanges();
  }

  updateRecipe(recipe: Recipe) {
    this.likedCount = recipe.likes + 1;
    this.db.doc('recipes/' + recipe.key).set({likes: this.likedCount}, {merge: true});
  }

  createRecipe(value) {
    return this.db.collection('recipes').add({
      username: value.username,
      recipeName: value.recipeName,
      description: value.description,
      foodType: value.foodType,
      difficulty: value.difficulty,
      // tslint:disable-next-line:radix
      numberOfServings: parseInt(value.numberOfServings),
      // tslint:disable-next-line:radix
      prepTime: parseInt(value.prepTime),
      // tslint:disable-next-line:radix
      cookingTime: parseInt(value.cookingTime),
      ingredients: value.ingredients,
      directions: value.directions,
      likes: 0
    });
  }
}
