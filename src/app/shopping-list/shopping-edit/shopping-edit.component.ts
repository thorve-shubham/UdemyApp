import { Component, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(name:HTMLInputElement,amount:HTMLInputElement){
    const ingredient = new Ingredient(name.value,amount.valueAsNumber);
    this.shoppingListService.addIngredient(ingredient);
  }

}
