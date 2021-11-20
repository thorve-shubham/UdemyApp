import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";
import { ShoppingListService } from "./shoppingList.service";

@Injectable({ providedIn : 'root'})
export class RecipeService{
    activeRecipe = new EventEmitter<Recipe>();

    recipes : Recipe[] = [new Recipe('Chicken Biryani','Exquisite Rice Dish from India','https://p1.pxfuel.com/preview/329/37/131/eastern-food-catering-food-rise-delicious-chicken.jpg',false, [new Ingredient("Chicken" , 1),new Ingredient("Rice",1)]),
    new Recipe('Misal','Pune Special','https://images.squarespace-cdn.com/content/v1/52e136c8e4b0bb084ea72249/1619388981624-WMY12E76BPO8F1S7FEN6/IMG_0170.jpg?format=1500w',true,[new Ingredient("Matki",500), new Ingredient("Paav",2)])];

    constructor(private shoppingListService : ShoppingListService) { }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}