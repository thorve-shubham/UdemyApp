import { Ingredient } from "./ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imageUrl: string;
    public isVeg: boolean;
    public ingredients : Ingredient[];
    public id : number;

    constructor(id:number,name:string,desc:string,imageUrl:string,isVeg:boolean,ingredients){
        this.description = desc;
        this.name = name;
        this.imageUrl = imageUrl;
        this.isVeg = isVeg;
        this.ingredients = ingredients;
        this.id = id;
    }
}