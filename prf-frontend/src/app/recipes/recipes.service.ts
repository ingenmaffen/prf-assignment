import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private readonly http: HttpClient) {}

  getRecipeCategories(): Observable<RecipeCategory[]> {
    return this.http.get<RecipeCategory[]>(
      `${environment.serverUrl}enums/recipe-categories`
    );
  }

  getList(): Observable<RecipeListItem[]> {
    return this.http.get<RecipeListItem[]>(
      `${environment.serverUrl}recipe/list`
    );
  }

  getRecipe(id: string): Observable<RecipeItem> {
    return this.http.get<RecipeItem>(`${environment.serverUrl}recipe/${id}`);
  }

  postRecipe(recipe: RecipeEditModel): Observable<any> {
    return this.http.post(`${environment.serverUrl}new-recipe`, recipe);
  }

  updateRecipe(recipeId: string, recipe: RecipeEditModel): Observable<any> {
    return this.http.put(
      `${environment.serverUrl}update-recipe/${recipeId}`,
      recipe
    );
  }
}

export interface RecipeListItem {
  id: string;
  image: string;
  name: string;
}

export interface RecipeItem {
  _id: string;
  name: string;
  category: 'breakfast' | 'soup' | 'mainDish' | 'salad' | 'dessert';
  steps: string[];
  ingredients: Ingredient[];
  creationDate: Date;
  reviews: any[];
  image?: string;
}

export interface RecipeEditModel {
  name: string;
  category: 'breakfast' | 'soup' | 'mainDish' | 'salad' | 'dessert';
  ingredients: Ingredient[];
  steps: string[];
}

export interface RecipeCategory {
  name: string;
  value: 'breakfast' | 'soup' | 'mainDish' | 'salad' | 'dessert';
}

export interface Ingredient {
  ingredientName: string;
  quantity: number;
  unit: string;
}
