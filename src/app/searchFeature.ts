import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "./recipe";

@Pipe({
  name: 'SearchFeature'
})
export class SearchFeature implements PipeTransform {

  transform(recipeThing: Recipe[], userSearch: string): any {
    // if (!recipeThing) {
    //   return [];
    // }
    // if (!userSearch) {
    //   return recipeThing;
    // }
    // userSearch = userSearch.toLocaleLowerCase();
// const filteredRecipes = recipeThing.filter(function(recipe){
//   return recipe.recipeName === userSearch;
// });
    return recipeThing.filter(iterate => {
      return iterate.recipeName.includes(userSearch);
      // return  iterate.recipeName.includes(userSearch)
      // return iterate.toLowerCase().includes(userSearch);
      // return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
