import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShopplingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShopplingListService) { }

  ngOnInit() {
    //palawenima data tika load karaganna
    this.ingredients = this.shoppingListService.getIngredients();
    //changes unoth ganna
    this.shoppingListService.ingredientAdded.
      subscribe((ingredientsArray: Ingredient[]) => {
        this.ingredients = ingredientsArray;
       // ingredientsArray = null;
      });
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
