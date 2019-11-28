import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
      username: ['', Validators.required],
      recipeName: ['', Validators.required],
      description: ['', Validators.required],
      foodType: [''],
      difficulty: [''],
      numberOfServings: [''],
      prepTime: [''],
      cookingTime: [''],
      ingredients: ['', Validators.required],
      directions: ['']
    });
  }

  resetFields() {
    this.recipeForm = this.fb.group({
      username: ['', Validators.required],
      recipeName: ['', Validators.required],
      description: ['', Validators.required],
      foodType: [''],
      difficulty: [''],
      numberOfServings: [''],
      prepTime: [''],
      cookingTime: [''],
      ingredients: ['', Validators.required],
      directions: ['']
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

  get username() { return this.recipeForm.get('username'); }


}
