import {Injectable} from '@angular/core';
// @ts-ignore
import {AngularFirestore} from '@angular/fire/firestore';
import {Recipe} from '../recipe';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private value: any;
private likeComment;
  constructor(public db: AngularFirestore) {
  }

  getRecipes(){
    return this.db.collection('recipes').snapshotChanges();
  }

  // createRecipe(recipe: Recipe){
  //   return this.db.collection('recipes').add(recipe);
  // }

  updateRecipe(recipe: Recipe) {
    this.db.doc('recipes/' + recipe.key).set({likes: 'liked'}, {merge: true});
  }

  createRecipe(value) {
    return this.db.collection('recipes').add({
      username: value.username,
      recipeName: value.recipeName,
      likes: 'unliked'
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
