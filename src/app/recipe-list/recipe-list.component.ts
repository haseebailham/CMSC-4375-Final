import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Recipe} from '../recipe';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {element} from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipeList: string[];
  loaded = false;
  searchingRecipes: Recipe[];
  sortValue: string;
  selectedRecipe: Recipe;

  constructor(private recipeService: FirebaseService) {
  }

  ngOnInit() {

    this.setLists();
    this.loaded = true;
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
      this.recipes.forEach(function(recipe) {
        rList.push(recipe.recipeName);
      });
      this.recipeList = rList;
      let rsList = [];
      this.recipes.forEach(function(recipe) {
        rsList.push(recipe);
      });
      this.searchingRecipes = rsList;
    });
  }

  likeRecipe(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe);
  }

  abcOrder() {
    this.searchingRecipes.sort((firstRecipe, secondRecipe) => firstRecipe.recipeName.localeCompare(secondRecipe.recipeName));
  }

  likesOrder() {
    this.searchingRecipes.sort(function(firstRecipe, secondRecipe) {
      return secondRecipe.likes - firstRecipe.likes;
    });
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}

