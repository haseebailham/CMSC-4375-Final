import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatSelectModule, MatInputModule, MatExpansionModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {RecipesPageComponent} from './recipes-page/recipes-page.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyMaterialModule} from './material.module';


import * as firebase from 'firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {FaqComponent} from './faq/faq.component';
import {SearchFeature} from './searchFeature';
import {MatCardModule} from '@angular/material/card';
import {FooterComponent} from './footer/footer.component';
import {DiscussionBoardComponent} from './discussion-board/discussion-board.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './auth/auth.guard';
import { RegisterSuccessfulPageComponent } from './register-successful-page/register-successful-page.component';
import {AboutUsComponent} from "./about-us/about-us.component";
import {RouterModule} from "@angular/router";
import {CookbookComponent} from './cookbook/cookbook.component';
import { BlogComponent } from './blog/blog.component';
import {PersonalityQuizComponent} from "./personality-quiz/personality-quiz.component";
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {Blog1Component} from './blog/blog1/blog1.component';
import {Blog2Component} from './blog/blog2/blog2.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './dialog/dialog.component';

// firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    ContactPageComponent,
    RecipesPageComponent,
    HomepageComponent,
    CookbookComponent,
    RecipeListComponent,
    FaqComponent,
    ContactPageComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SearchFeature,
    DiscussionBoardComponent,
    RecipePageComponent,
    ProfileComponent,
    RegisterSuccessfulPageComponent,
    AboutUsComponent,
    BlogComponent,
    Blog1Component,
    Blog2Component,
    PersonalityQuizComponent,
    RecipeDetailComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Lab 4'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MyMaterialModule,
    MatCardModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: RecipeListComponent },
      { path: 'recipes/:recipeKey', component: RecipePageComponent },
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]


})


export class AppModule {
}
