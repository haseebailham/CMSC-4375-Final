import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {FaqComponent} from './faq/faq.component';

// firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    ContactPageComponent,
    RecipesPageComponent,
    HomepageComponent,
    RecipeListComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Lab 4'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
