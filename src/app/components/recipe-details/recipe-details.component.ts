import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipes = [
    { id: 1, name: 'Mickey Pancakes', ingredients: 'Flour, eggs, milk, butter', instructions: 'Mix, cook, and enjoy!' },
    { id: 2, name: 'Dole Whip', ingredients: 'Pineapple, ice cream', instructions: 'Blend until smooth.' },
    { id: 3, name: 'Churros', ingredients: 'Flour, sugar, cinnamon', instructions: 'Fry and coat with cinnamon sugar.' }
  ];
  
  recipe: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.recipes.find(r => r.id === id);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
