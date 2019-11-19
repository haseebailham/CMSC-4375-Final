import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;


  constructor(
    public firebaseService: FirebaseService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.recipeForm = this.fb.group({
      username: [''],
      recipeName: [''],
      description: [''],
      foodType: [''],
      difficulty: [''],
      numberOfServings: [''],
      prepTime: [''],
      cookingTime: [''],
      ingredients: [''],
      directions: ['']
    });
  }

  resetFields() {
    this.recipeForm = this.fb.group({
      username: new FormControl(''),
      recipeName: new FormControl(''),
      description: new FormControl(''),
      foodType: new FormControl(''),
      difficulty: new FormControl(''),
      numberOfServings: new FormControl(''),
      prepTime: new FormControl(''),
      cookingTime: new FormControl(''),
      ingredients: new FormControl(''),
      directions: new FormControl('')
    });
  }

  onSubmit(value) {
    this.firebaseService.createRecipe(value)
      .then(
        res => {
          // reset the fields.
          this.resetFields();
        }
      );
  }


}
