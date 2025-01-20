import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgClass, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>()

  sizeClass = computed(() => {
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();

    if (isLeftSidebarCollapsed) {
      return "";
    }

    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
  });
}
