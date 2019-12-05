import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;


  constructor(
    public firebaseService: FirebaseService,
    private fb: FormBuilder,
  private matDialog: MatDialog
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
      occasion: [''],
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
      occasion: [''],
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
    this.openDialog();
  }

  get username() { return this.recipeForm.get('username'); }


  public hasError = (controlName: string, errorName: string) =>{
    return this.recipeForm.controls[controlName].hasError(errorName);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogComponent, dialogConfig);
  }
}
