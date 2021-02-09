import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EntriesComponent } from './components/entries/entries.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    HomeComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
