import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  showRecipeDetails(){
    console.log(this.recipe)
    this.recipeService.activeRecipe.emit(this.recipe);
  }

}
