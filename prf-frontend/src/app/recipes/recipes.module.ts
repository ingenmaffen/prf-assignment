import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'view',
        component: ViewComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'new',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ListComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
  ],
})
export class RecipesModule {}
