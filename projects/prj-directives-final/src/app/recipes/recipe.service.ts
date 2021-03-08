
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShopplingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    //you can use a method and encapsulate but i use this
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('dosa'
            , 'This is simply a test'
            , 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
            , [new Ingredient('masala', 10), new Ingredient('uludu', 1)]
        ),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
            , [new Ingredient('masala', 10), new Ingredient('uludu', 1)]
        )
    ];
    constructor(private slService: ShopplingListService) { }
    getRecipies() {
        return this.recipes.slice();
    }

    onAddToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsArray(ingredients);
    }
}