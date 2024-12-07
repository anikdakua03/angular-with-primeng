import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NotificationsService } from '../../services/notifications.service';
// import { AppConfiguratorComponent } from "../app-configurator/app-configurator.component";

@Component({
    selector: 'app-header',
    imports: [PrimeNgModule, ReactiveFormsModule, RouterLink, SidebarComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  themesMenu: { id: string, value: string }[] = [
    {
      id: "Aura",
      value: "Aura"
    },
    {
      id: "Material",
      value: "Material"
    },
    {
      id: "Lara",
      value: "Lara"
    },
    {
      id: "Nora",
      value: "Nora"
    }
  ];

  themeGroup!: FormGroup;

  notificationPanelVisible: boolean = false;


  constructor(private themeService: ThemeService, public notification: NotificationsService) {
    this.themeGroup = new FormGroup({
      selectedTheme: new FormControl<string>("", Validators.required)
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }

  onToggleTheme() {
    const theme = this.themeGroup.value.selectedTheme.id ?? "Aura";
  }

  toggleDarkMode() {
    const element = document.querySelector('html');

    if (element === null) {
      return;
    }

    element.classList.toggle('my-app-dark');
  }

  toggleNotification() {
    this.notificationPanelVisible = true;
  }
}
