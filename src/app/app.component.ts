import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { HeaderComponent } from "./components/header/header.component";
import { MyComponentsComponent } from "./components/my-components/my-components.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MyComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-with-Primeng';

  constructor(private config: PrimeNGConfig) {
    // Default theme configuration
    this.config.theme.set({
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      }
    });
  }
}
