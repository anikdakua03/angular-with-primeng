import { Component, Input } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';

@Component({
  selector: 'app-sidebar',
  imports: [PrimeNgModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input({ required: true }) visible: boolean = false;

  constructor(public notificationService: NotificationsService) {

  }
}
