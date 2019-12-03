import {Recipe} from "./recipe";
import {OnInit} from '@angular/core';
import {FirebaseService} from "./services/firebase.service";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";


export const Recipes: Recipe[] = [
  { key: '7xOn4P4z4XiBLgp9UL97', username: "hello123", recipeName: 'Donut Brownies', description: "A secret recipe combining two of my favorite desserts.", foodType: "Dessert", difficulty: "Moderate",
    numberOfServings: "12", prepTime: "30", cookingTime: "60", ingredients: "Flour, chocolate, oil, eggs, sugar, butter, frosting, etc", directions: "Heat the oven at 400 degrees, make the batter, and bake the brownies, then fry them in donut dough", likes: 11},
  {key: 'ADIk9sUTsFVn6tf2fjIE', username: "recipeguru", recipeName: 'Crepe Cake', description: "My own recipe of some dessert.", foodType: "Dessert", difficulty: "Moderate",
    numberOfServings: "45", prepTime: "40", cookingTime: "40", ingredients: "Sugar", directions: "Sugar mix into the batter and bake", likes: 7},
  {key: 'HOP0CpP21fFr0jPIpJz8', username: "validateMe", recipeName: 'Mango Pudding', description: "Pudding made out of mangos and sugar", foodType: "", difficulty: "Easy",
    numberOfServings: "1", prepTime: "20", cookingTime: "30", ingredients: "Mangos (3), Pudding, Sugar", directions: "Make the mango pudding.", likes: 33}
];



