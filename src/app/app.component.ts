import { Component, HostListener, OnInit, signal } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-with-Primeng';

  isLeftSidebarCollapsed = signal<boolean>(true);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);

    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
