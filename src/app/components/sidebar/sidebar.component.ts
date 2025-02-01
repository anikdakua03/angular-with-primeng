import { Component, inject, input, output, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Drawer } from 'primeng/drawer';
import { NotificationsService } from '../../services/notifications.service';
import { ThemeService } from '../../services/theme.service';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';

@Component({
  selector: 'app-sidebar',
  imports: [PrimeNgModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly isLeftSidebarCollapsed = input.required<boolean>();
  readonly changeIsLeftSidebarCollapsed = output<boolean>();

  readonly drawerRef = viewChild.required<Drawer>('drawerRef');

  themeService = inject(ThemeService);

  constructor(public notificationService: NotificationsService) {

  }

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
