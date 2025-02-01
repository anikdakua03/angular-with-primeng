import { Component, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ClerkAuthService } from '../../services/clerk-auth/clerk-auth.service';
import { NotificationsService } from '../../services/notifications.service';
import { ThemeService } from '../../services/theme.service';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';

@Component({
    selector: 'app-header',
  imports: [PrimeNgModule, ReactiveFormsModule, RouterLink],
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

  notificationPanelVisible = signal(false);


  constructor(private router: Router, public authService: ClerkAuthService, public notification: NotificationsService, public themeService: ThemeService) {
  }

  ngOnInit() {
  }

  openSignIn() {
    if (this.authService.getUserFromSignal === null) {
      this.authService.signIn();
      return;
    }
    console.log("User details ", this.authService.getUserFromSignal);
    console.log("Already signed in...");
  }

  onSignOut() {
    if (this.authService.getUserFromSignal === null) {
      return;
    }
    this.authService.signOut().then(() => {
      this.router.navigate(['']); // Redirect to login page
    });
  }

  openUser() {
    this.authService.openUserProfile();
    this.getCurrentUser();
  }

  getCurrentUser() {
    const res = this.authService.currentUser();
    console.log("Checking: ", res);
    return res;
  }

  toggleNotification() {
    this.notificationPanelVisible.set(true);
  }
}
