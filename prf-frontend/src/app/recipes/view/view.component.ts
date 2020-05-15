import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipeItem, RecipesService } from '../recipes.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  placeholderImage: string =
    '../../../assets/icons/insert_photo-black-24dp.svg';
  recipeId: string;
  recipeDetails: RecipeItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.queryParams.recipeId;
    if (this.recipeId) {
      this.getRecipe(this.recipeId);
    } else {
      this.navigateToList();
    }
  }

  navigateToList(): void {
    this.router.navigate(['recipes/list']);
  }

  private getRecipe(id): void {
    this.service.getRecipe(id).subscribe((recipe) => {
      this.recipeDetails = recipe;
      console.log(this.recipeDetails);
    });
  }
}
