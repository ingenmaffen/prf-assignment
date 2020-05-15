import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipesService, RecipeCategory, Ingredient } from '../recipes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  recipeId: string;
  formGroup: FormGroup;

  categories: RecipeCategory[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RecipesService
  ) {}

  ngOnInit(): void {
    this.getCategories();

    this.recipeId = this.activatedRoute.snapshot.queryParams.recipeId;
    if (this.recipeId) {
      // load recipe for edit
      this.getRecipe(this.recipeId);
    } else {
      // create new recipe
      this.addIngredientToFormArray();
      this.addStepToFormArray();
    }

    // TODO: form validation
    this.formGroup = this.formBuilder.group({
      name: null,
      category: null,
      ingredients: this.formBuilder.array([]),
      steps: this.formBuilder.array([]),
      image: null,
    });

    // TODO: image upload
  }

  sendRecipe(): void {
    if (this.recipeId) {
      // update recipe
      this.service
        .updateRecipe(this.recipeId, this.formGroup.value)
        .subscribe((val) => {
          this.navigateToDetails();
        });
    } else {
      // create recipe
      this.service.postRecipe(this.formGroup.value).subscribe((val) => {
        // TODO: proper user feedback (toastr?)
        this.navigateToList();
      });
    }
  }

  addIngredientToFormArray(val?: Ingredient): void {
    (this.formGroup.controls['ingredients'] as FormArray).push(
      this.formBuilder.group({
        quantity: val && val.quantity ? val.quantity : null,
        unit: val && val.unit ? val.unit : null,
        ingredientName: val && val.ingredientName ? val.ingredientName : null,
      })
    );
  }

  removeIngredientFromFormArray(index: number): void {
    (this.formGroup.controls.ingredients as FormArray).removeAt(index);
  }

  addStepToFormArray(val?: string): void {
    (this.formGroup.controls['steps'] as FormArray).push(
      this.formBuilder.control(val)
    );
  }

  removeStepFromFormArray(index: number): void {
    (this.formGroup.controls.steps as FormArray).removeAt(index);
  }

  cancel(): void {
    if (this.recipeId) {
      this.navigateToDetails();
    } else {
      this.navigateToList();
    }
  }

  private getRecipe(id): void {
    this.service.getRecipe(id).subscribe((recipe) => {
      this.formGroup.controls.name.setValue(recipe.name);
      this.formGroup.controls.category.setValue(recipe.category);
      recipe.ingredients.forEach((ingredient) => {
        this.addIngredientToFormArray(ingredient);
      });
      recipe.steps.forEach((step) => {
        this.addStepToFormArray(step);
      });
    });
  }

  private getCategories(): void {
    this.service.getRecipeCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  private navigateToList(): void {
    this.router.navigate([`/recipes/list`]);
  }

  private navigateToDetails(): void {
    this.router.navigate([`/recipes/view`], {
      queryParams: { recipeId: this.recipeId },
    });
  }
}
