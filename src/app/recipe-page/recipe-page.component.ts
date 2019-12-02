import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import { ActivatedRoute } from '@angular/router';

import {Recipe} from "../recipe";
import {recipes} from "../recipes";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
  providers: [FirebaseService]
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.recipe = recipes[+params.get('recipeKey')];
    });

  }


}
