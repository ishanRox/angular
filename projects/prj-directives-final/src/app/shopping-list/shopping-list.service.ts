import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShopplingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    //  meke awula api array eke reference eka exchange karagannawa 
    //wthakota me method eka call karana kenata onnam meka null karanna unath puluwan
    return this.ingredients;
    //hodama de me method eka palaweni data tika danna witharak thiyagena 
    //event emmiter ekak dala eka through ahagena inna eka me array eka diha
  }
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //kawruhari me method eka call kaloth event ekak emit karanawa
    //ingredientAdded eventemmiter ekata subscribe karan inna kenata meka ahenawa
    this.ingredientAdded.emit(this.ingredients);
  }
}