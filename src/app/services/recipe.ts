import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  private customRecipes: any[] = [];  // receitas adicionadas localmente

  constructor(private http: HttpClient) {}

  getRecipes(query: string = ''): Observable<any> {
    return new Observable(observer => {
      this.http.get<any>(`${this.API_URL}${query}`).subscribe(apiData => {
        const allMeals = [...(apiData.meals || []), ...this.customRecipes];
        observer.next({ meals: allMeals });
        observer.complete();
      });
    });
  }

  addCustomRecipe(recipe: any): void {
    this.customRecipes.push({
      strMeal: recipe.name,
      strArea: 'User',
      strCategory: 'Custom',
      strMealThumb: recipe.imagePreview || 'https://via.placeholder.com/200'
    });
  }
}
