import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Recipe} from '../recipe';
import {FirebaseService} from '../services/firebase.service';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private db: AngularFirestore, private recipeService: FirebaseService) {
  }

  userName: string;

  user: firebase.User;
  uid: string;
  recipes: Recipe[];
  recipeList: string[];
  loaded = false;
  searchingRecipes: Recipe[];
  sortValue: string;
  doc: string;
  selectedRecipe: Recipe;


  async ngOnInit() {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });
    this.uid = this.auth.getUser().uid;
    this.doc = await this.db.doc(`Users/${this.uid}`).ref.get().then(function(doc): string {
      if (doc.exists) {
        return doc.data().userName.toString();
      } else {
        console.log('No such document!');
      }
    });
    this.userName = this.doc.toString();

    this.setLists();
    this.loaded = true;
  }

  setLists() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Recipe;
      });
      let rList = [];
      this.recipes.forEach(function(recipe) {
        rList.push(recipe.recipeName);
      });
      this.recipeList = rList;
      let rsList = [];
      const userName = this.userName;
      this.recipes.forEach(function(recipe) {
        if (recipe.username === userName) {
        rsList.push(recipe);
        }
      });
      this.searchingRecipes = rsList;
    });
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
