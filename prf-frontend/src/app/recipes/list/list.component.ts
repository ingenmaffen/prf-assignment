import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipesService, RecipeItem } from '../recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  recipeList: RecipeItem[];

  constructor(private service: RecipesService, private router: Router) {}

  ngOnInit(): void {
    this.getList();
  }

  navigateToView(id: string): void {
    this.router.navigate([`/recipes/view`], { queryParams: { recipeId: id } });
  }

  private getList(): void {
    this.service.getList().subscribe((items) => {
      this.recipeList = items;
      console.log(this.recipeList);
    });
  }
}
