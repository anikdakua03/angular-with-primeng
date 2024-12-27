import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

declare type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private document = inject(DOCUMENT);
  readonly currentTheme = signal<Theme>('light');

  constructor() {
    this.setTheme(this.getThemeFromLocalStorage());
  }

  toggleTheme() {
    if (this.currentTheme() === 'light') {
      this.setTheme('dark');
    }
    else {
      this.setTheme('light');
    }
  }

  private setTheme(theme: Theme) {
    this.currentTheme.set(theme);

    if (theme === 'dark') {
      this.document.body.classList.add('my-app-dark');
      this.document.documentElement.classList.add('my-app-dark');
    }
    else {
      this.document.body.classList.remove('my-app-dark');
      this.document.documentElement.classList.remove('my-app-dark');
    }

    //  also set in local storage
    this.setThemeInLocalStorage(theme);
  }

  setThemeInLocalStorage(theme: Theme) {
    localStorage.setItem("preferred-theme", theme);
  }

  getThemeFromLocalStorage(): Theme {
    return localStorage.getItem("preferred-theme") as Theme ?? 'light';
  }
}