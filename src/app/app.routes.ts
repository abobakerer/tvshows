import { Routes } from '@angular/router';
import { AllTVshowsComponent } from './components/all-tvshows/all-tvshows.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllTVshowsComponent },
  { path: 'details/:id', component: DetailsComponent },
];
