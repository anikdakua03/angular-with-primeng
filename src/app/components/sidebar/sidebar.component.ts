import { Component, input, output, viewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { NotificationsService } from '../../services/notifications.service';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [PrimeNgModule, PanelMenuModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly isLeftSidebarCollapsed = input.required<boolean>();
  readonly changeIsLeftSidebarCollapsed = output<boolean>();

  readonly drawerRef = viewChild.required<Drawer>('drawerRef');

  items: MenuItem[] = [
    {
      label: "1",
    },
    {
      label: "2",
      items: [
        {
          label: "child 1"
        },
        {
          label: "child 2"
        }
      ]
    },
    {
      label: "3",
    }
  ];

  constructor(public notificationService: NotificationsService) {

  }

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
