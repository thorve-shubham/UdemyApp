import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id:number;
  recipe: Recipe;

  constructor(private recipeService : RecipeService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.recipe = this.recipeService.getRecipe(this.id);
    this.route.params.subscribe(
      (params : Params)=>{
        this.recipe = this.recipeService.getRecipe(params["id"]);
      }
    )
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() : void {
    this.router.navigate(["edit"],{ relativeTo : this.route});
  }

}
