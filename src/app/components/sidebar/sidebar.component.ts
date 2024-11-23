import { Component, Input } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input({ required: true }) visible: boolean = false;

  constructor(public notificationService: NotificationsService) {

  }
}
