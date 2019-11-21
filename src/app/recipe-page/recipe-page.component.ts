import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;
  constructor(recipe: Recipe) {
    this.recipe = recipe;
  }

  ngOnInit() {

  }


}
