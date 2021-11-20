import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

@Injectable({providedIn : 'root'})
export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients : Ingredient[] = [new Ingredient('Apples',5),new Ingredient('Potato',6)];

    getIngredients() : Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) : void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingrdients : Ingredient[]) : void {
        this.ingredients = [ ...this.ingredients,...ingrdients];
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}