import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private readonly http: HttpClient) {}

  getList(): Observable<RecipeItem[]> {
    return this.http.get<RecipeItem[]>(`${environment.serverUrl}recipe/list`);
  }

  getRecipe(id: string): Observable<RecipeItem> {
    return this.http.get<RecipeItem>(`${environment.serverUrl}recipe/${id}`);
  }

  postRecipe(recipe: RecipeEditModel): Observable<any> {
    return this.http.post(`${environment.serverUrl}new-recipe`, recipe);
  }
}

export interface RecipeItem {
  _id: string;
  name: string;
  category: 'breakfast' | 'soup' | 'mainDish' | 'salad' | 'dessert';
  steps: string[];
  ingredients: any[];
  creationDate: Date;
  reviews: any[];
}

export interface RecipeEditModel {}
