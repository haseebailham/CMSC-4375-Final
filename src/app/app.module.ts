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


import * as firebase from 'firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {FaqComponent} from './faq/faq.component';
import { SearchFeature } from './searchFeature';
import {MatCardModule} from '@angular/material/card';
import {FooterComponent} from './footer/footer.component';

// firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    ContactPageComponent,
    RecipesPageComponent,
    HomepageComponent,
    RecipeListComponent,
    FaqComponent,
    ContactPageComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SearchFeature
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
