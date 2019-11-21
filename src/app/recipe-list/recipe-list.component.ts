import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Recipe} from '../recipe';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {element} from "protractor";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Observable<any>;
  // private recipes1;
  recipes: Recipe[];
  userSearch: string;
  private recipeItem;
  recipeList: string[];
  loaded = false;
  searchingRecipes: Recipe[];

  // temp string items of recipe names.
  // private recipeNameList = ['Donuts', 'Cake', 'Spaghetti', 'Brownies', 'Apple Pie']
  private i: number;

  constructor(private recipeService: FirebaseService, private database: AngularFireDatabase) {
    // this.recipes = database.list('recipes').snapshotChanges();
    // this.recipes1 = recipeService.getRecipes();
  }

  ngOnInit() {

    this.setLists();
    this.loaded = true;
    // if (this.recipes) {
    //   this.recipes.forEach(function (recipe) {
    //     this.recipeList.push(recipe.recipeName);
    //   });
    // }
    // console.log(this.recipeList);
    // this.loaded = true;
    // this.recipeList = this.recipeService.getRecipes().subscribe(res => (this.recipeList = res));
    // this.recipeItem.forEach((name, index) => this.recipeItem[index] = this.recipeItem.payload.doc.data().recipeName);
    // this.recipes = this.recipes.sort(function(a, b) {
    //   return a.recipeName.localeCompare(b.recipeName);
    // });
  }

  setLists() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Recipe;
      });
      let rList = [];
      this.recipes.forEach(function (recipe) {
        rList.push(recipe.recipeName);
      });
      this.recipeList = rList;
      let rsList = [];
      this.recipes.forEach(function (recipe) {
        rsList.push(recipe);
      });
      this.searchingRecipes = rsList;
      this.searchingRecipes.sort((a, b) => a.recipeName.localeCompare(b.recipeName));
    });


    // this.recipes.toString();
    // this.recipes.forEach(element => console.log(element));
    //   this.i=0;
    //   this.recipeList[this.i]=recipe.recipeName;
    //   this.i = this.i+1;
    // // this.recipeList.add(recipe.recipeName);

  }

  likeRecipe(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe);
  }
}

