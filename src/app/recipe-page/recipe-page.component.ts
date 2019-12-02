import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {FirebaseService} from "../services/firebase.service";
import {Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
  providers: [FirebaseService]
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;

  constructor() { }

  ngOnInit() {


  }


}
