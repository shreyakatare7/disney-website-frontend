import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [CommonModule, FormsModule],
})
export class RecipeListComponent {
  recipes = [
    { id: 1, name: 'Mickey Pancakes', ingredients: 'Flour, eggs, milk, butter', description: 'Fluffy pancakes shaped like Mickey Mouse!' },
    { id: 2, name: 'Dole Whip', ingredients: 'Pineapple, ice cream', description: 'Refreshing pineapple soft serve.' },
    { id: 3, name: 'Churros', ingredients: 'Flour, sugar, cinnamon', description: 'Crispy and sweet Disney-style churros.' }
  ];

  searchTerm: string = '';

  constructor(private router: Router) {}

  viewRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }

  get filteredRecipes() {
    return this.recipes.filter(recipe =>
      recipe.ingredients.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
