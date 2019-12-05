import { Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  commentForm: FormGroup;
  value: string;
  commentArray: string[];

  constructor(private service: FirebaseService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group( {
      comments: new FormControl("")
    })
  }

  onSubmit(value) {
    let allComments = this.service.addComment(value, this.recipe);

    this.recipe.comments = allComments;
    this.commentArray = allComments.split("-");

    // let array = allComments.split("-");
    // this.recipe.commentArray = array;
    // this.value = "";
    this.commentForm.reset();
  }

  nextComment() {
    this.commentForm = this.formBuilder.group({
      comments: new FormControl(""),
    });
  }

}
