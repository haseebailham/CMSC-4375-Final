import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Recipe} from '../recipe';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Observable<any>;
  // private recipes1;
  recipes: Recipe[];
  searchText: string;
  private recipeItem;
  private recipeList;
  constructor(private recipeService: FirebaseService, private database: AngularFireDatabase) {
    // this.recipes = database.list('recipes').snapshotChanges();
    // this.recipes1 = recipeService.getRecipes();
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Recipe;
      });
    });
    this.recipeList = this.recipeService.getRecipes().subscribe(res => (this.recipeList = res));
    this.recipeItem.forEach((name, index) => this.recipeItem[index] = this.recipeItem.payload.doc.data().recipeName);
    // this.recipes = this.recipes.sort(function(a, b) {
    //   return a.recipeName.localeCompare(b.recipeName);
    // });
  }

  createRecipe(recipe: Recipe) {
    this.recipeService.createRecipe(recipe);
  }


  likeRecipe(recipe:Recipe) {
    this.recipeService.updateRecipe(recipe);
  }
}

