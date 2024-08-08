import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AllTVshowsComponent } from './components/all-tvshows/all-tvshows.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllTVshowsComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tv';
}
