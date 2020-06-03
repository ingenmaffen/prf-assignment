import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipesService, RecipeListItem } from '../recipes.service';
import { NgxHotjarService } from 'ngx-hotjar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  placeholderImage: string =
    '../../../assets/icons/insert_photo-black-24dp.svg';
  recipeList: RecipeListItem[];

  constructor(
    private service: RecipesService,
    private router: Router,
    private readonly hotjar: NgxHotjarService
  ) {}

  ngOnInit(): void {
    this.hotjar.virtualPageView('/recipes/list');
    this.getList();
  }

  navigateToView(id: string): void {
    this.router.navigate([`/recipes/view`], { queryParams: { recipeId: id } });
  }

  private getList(): void {
    this.service.getList().subscribe((items) => {
      this.recipeList = items;
    });
  }
}
