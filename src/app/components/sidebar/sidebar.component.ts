import { Component, input, output, viewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { NotificationsService } from '../../services/notifications.service';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';

@Component({
  selector: 'app-sidebar',
  imports: [PrimeNgModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly isLeftSidebarCollapsed = input.required<boolean>();
  readonly changeIsLeftSidebarCollapsed = output<boolean>();

  readonly drawerRef = viewChild.required<Drawer>('drawerRef');

  constructor(public notificationService: NotificationsService) {

  }

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
