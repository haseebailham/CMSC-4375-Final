import { Component, OnInit } from '@angular/core';
import {CookbookService} from './cookbook-service';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  constructor(public cookbook: CookbookService) { }

  ngOnInit() {
  }

  displayRecipes() {
    this.cookbook.viewCookbook();
  }

  addRecipe(recipe: Recipe) {
    this.cookbook.addRecipe(recipe).then(r => {});
  }

}
