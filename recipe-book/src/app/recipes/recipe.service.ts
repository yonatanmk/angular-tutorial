import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Grilled Chicken', 'Yumm', 'https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg', [
      new Ingredient('Chicken Breast', 6),
      new Ingredient('Spices', 2),
    ]),
    new Recipe('Chicken and Asparagus', 'This looks good', 'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg', [
      new Ingredient('Chicken Breast', 3),
      new Ingredient('Spices', 2),
      new Ingredient('Asparagus', 25),
      new Ingredient('Lemon', 0.5),
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // copies the array to prevent mutation of the original
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}