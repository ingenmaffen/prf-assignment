import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxHotjarService } from 'ngx-hotjar';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(
    private router: Router,
    private readonly hotjar: NgxHotjarService
  ) {}

  ngOnInit(): void {
    this.hotjar.virtualPageView('/recipes');
  }

  navigateToList(): void {
    this.router.navigate(['/recipes/list']);
  }

  navigateToNew(): void {
    this.router.navigate(['/recipes/new']);
  }
}
