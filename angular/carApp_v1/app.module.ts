import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './src/app/app.component';
import { CarsListComponentComponent } from './src/app/components/cars-list-component/cars-list-component.component';
import { FilterOptionComponent } from './src/app/components/filter-option/filter-option.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponentComponent,
    FilterOptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
