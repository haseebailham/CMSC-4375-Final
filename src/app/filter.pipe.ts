import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "./recipe";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(recipeThing: string[], userSearch: string): any {
    if (!recipeThing) {
      return [];
    }
    if (!userSearch) {
      return recipeThing;
    }
    userSearch = userSearch.toLocaleLowerCase();

    return recipeThing.filter(iterate => {
      return iterate.toLocaleLowerCase().includes(userSearch);
      // return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
