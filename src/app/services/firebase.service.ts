import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Recipe} from '../recipe';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private value: any;
  private likeComment;
  private likedCount: number;
  private user = this.authdb.auth.currentUser;
  private commentFromDB = "";

  constructor(public db: AngularFirestore, public authdb: AngularFireAuth) {
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
      occasion: value.occasion,
      // tslint:disable-next-line:radix
      numberOfServings: parseInt(value.numberOfServings),
      // tslint:disable-next-line:radix
      prepTime: parseInt(value.prepTime),
      // tslint:disable-next-line:radix
      cookingTime: parseInt(value.cookingTime),
      ingredients: value.ingredients,
      directions: value.directions,
      likes: 0,
      comments: "",
      // commentArray: value.commentArray
    });
  }

  // createCookbook(title) {
  //   return this.db.collection('Users').doc(this.user.uid).collection(title);
  // }

  getCookbookList() {
    return this.db.collection('Users').doc(this.user.uid).collection('Cookbook');
  }

  viewCookbook() {
    return this.db.collection('Users').doc(this.user.uid).collection('Cookbook').doc();
  }

  addRecipe(recipe: Recipe) {
    return this.db.collection('Users').doc(this.user.uid).collection('Cookbook').add({recipe});
  }

  // Adds comment to recipe object and returns complete comment from database.
  addComment(formValue, recipe:Recipe) {
    this.commentFromDB = (recipe.comments + "-" + formValue.comments);
    this.db.doc('recipes/' + recipe.key).set({comments: this.commentFromDB}, {merge: true});
    return this.commentFromDB;
    // this.db.doc('recipes/' + recipe.key).set({comments: formValue}, {merge: true});
  }

}
