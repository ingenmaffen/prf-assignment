import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Angulartics2Module,
  RouterlessTracking,
  Angulartics2,
} from 'angulartics2';
import { MatomoModule } from 'ngx-matomo';
import { NgxHotjarModule } from 'ngx-hotjar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [AppComponent, RecipesComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    HttpClientModule,
    MatomoModule,
    MatToolbarModule,
    NgxHotjarModule.forRoot('1839628'),
    RecipesModule,
  ],
  providers: [RouterlessTracking, Angulartics2],
  bootstrap: [AppComponent],
})
export class AppModule {}
