import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {FaqComponent} from './faq/faq.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {DiscussionBoardComponent} from './discussion-board/discussion-board.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './auth/auth.guard';
import {RegisterSuccessfulPageComponent} from './register-successful-page/register-successful-page.component';
import {AboutUsComponent} from "./about-us/about-us.component";
import {PersonalityQuizComponent} from "./personality-quiz/personality-quiz.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'allrecipes', component: RecipeListComponent},
  { path: 'create', component: RecipeFormComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'discussion', component: DiscussionBoardComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'register successful', component: RegisterSuccessfulPageComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'personality', component: PersonalityQuizComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
