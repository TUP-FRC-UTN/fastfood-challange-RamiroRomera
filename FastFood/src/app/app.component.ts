import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from './point-of-sell/point-of-sell.component';
import { CocinaComponent } from './cocina/cocina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PointOfSellComponent, CocinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFood';
}
