import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FaqComponent} from "./faq/faq.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'allrecipes', component: RecipeListComponent},
  { path: 'create', component: RecipeFormComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
