import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  activeRecipe: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipeService.activeRecipe.subscribe(
      (recipe: Recipe) => {
        this.activeRecipe = recipe;
      }
    )
  }



}
