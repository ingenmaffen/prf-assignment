import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private readonly http: HttpClient) {}

  postRecipe(recipe: RecipeEditModel): Observable<any> {
    return this.http.post(`${environment.serverUrl}new-recipe`, recipe);
  }
}

export interface RecipeEditModel {}
