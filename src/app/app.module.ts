import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { AppRoutineModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
