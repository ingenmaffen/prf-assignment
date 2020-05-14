import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: RecipesService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: null,
      category: null,
      ingredients: [],
      steps: [],
      image: null,
    });
  }

  sendRecipe(): void {
    this.service.postRecipe(this.formGroup.value).subscribe((val) => {
      console.log(val);
    });
  }
}
