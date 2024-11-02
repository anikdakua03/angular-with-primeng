import { Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private primeNgConfig: PrimeNGConfig) { }

  toggleTheme(theme: string) {
    this.primeNgConfig.theme.set({
      preset: theme,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      }
    });
  }
}
