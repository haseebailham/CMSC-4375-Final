import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  recipes: Recipe[] = [
    {key: '7xOn4P4z4XiBLgp9UL97', username: 'hello123', recipeName: 'Donut Brownies', description: 'A secret recipe combining two of my favorite desserts.',
    foodType: 'Dessert', difficulty: 'Moderate', numberOfServings: '12', prepTime: '30', cookingTime: '60', ingredients: 'Flour, chocolate, oil, eggs, sugar, butter, frosting, etc',
    directions: 'Heat the oven at 400 degrees, make the batter, and bake the brownies, then fry them in donut dough', likes: 11},
    {key: 'ADIk9sUTsFVn6tf2fjIE', username: 'recipeguru', recipeName: 'Crepe Cake', description: 'My own recipe of some dessert',
    foodType: 'Dessert', difficulty: 'Moderate', numberOfServings: '45', prepTime: '30', cookingTime: '40', ingredients: 'Sugar',
    directions: 'Sugar mix into the batter and bake', likes: 7}
  ];

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
