import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "./recipe";

@Pipe({
  name: 'SearchFeature'
})
export class SearchFeature implements PipeTransform {

  transform(recipeThing: string[], userSearch: string): any {
    if (!recipeThing) {
      return 'No results found';
    }
    if (!userSearch) {
      return recipeThing;
    }
    // userSearch = userSearch.toLocaleLowerCase();

    return recipeThing.filter(iterate => {
      return iterate.includes(userSearch);
      // return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
