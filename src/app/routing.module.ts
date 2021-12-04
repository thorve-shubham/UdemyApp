import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoRecipeSelectedComponent } from "./recipe-book/no-recipe-selected/no-recipe-selected.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes : Routes = [
    { path : "shoppingList", component : ShoppingListComponent},
    { path : "recipe", component : RecipeBookComponent,
        children : [
            { path : "", component : NoRecipeSelectedComponent },
            { path : "new", component : RecipeEditComponent },
            { path : ":id", component : RecipeDetailComponent },
            { path : ":id/edit", component : RecipeEditComponent }
        ]    
    },
    { path : "", redirectTo : "/shoppingList", pathMatch: "full"}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}