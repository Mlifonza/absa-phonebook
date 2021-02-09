import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntriesComponent } from './components/entries/entries.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'entries', component: EntriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
