import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css']
})
export class Recipes implements OnInit {
  meals: any[] = [];
  searchQuery: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.recipeService.getRecipes(this.searchQuery).subscribe((data) => {
      this.meals = data.meals || [];
    });
  }
}
