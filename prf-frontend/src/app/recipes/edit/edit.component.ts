import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { RecipesService, RecipeCategory } from '../recipes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  formGroup: FormGroup;
  // imageFormControl: FormControl;

  categories: RecipeCategory[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: RecipesService
  ) {}

  ngOnInit(): void {
    this.getCategories();

    // TODO: form validation
    this.formGroup = this.formBuilder.group({
      name: null,
      category: null,
      ingredients: this.formBuilder.array([]),
      steps: this.formBuilder.array([]),
      image: null,
    });
    this.addIngredientToFormArray();
    this.addStepToFormArray();

    // TODO: image upload
    /* this.imageFormControl = this.formBuilder.control('');
    this.imageFormControl.valueChanges.subscribe((val) => {
      console.log(val);
    }); */
  }

  sendRecipe(): void {
    this.service.postRecipe(this.formGroup.value).subscribe((val) => {
      console.log(val);
    });
  }

  addIngredientToFormArray(): void {
    (this.formGroup.controls['ingredients'] as FormArray).push(
      this.formBuilder.group({
        quantity: null,
        unit: null,
        ingredientName: null,
      })
    );
  }

  removeIngredientFromFormArray(index: number): void {
    (this.formGroup.controls.ingredients as FormArray).removeAt(index);
  }

  addStepToFormArray(): void {
    (this.formGroup.controls['steps'] as FormArray).push(
      this.formBuilder.control(null)
    );
  }

  removeStepFromFormArray(index: number): void {
    (this.formGroup.controls.steps as FormArray).removeAt(index);
  }

  private getCategories(): void {
    this.service.getRecipeCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
