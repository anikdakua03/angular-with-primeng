import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
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
      id: "Lara",
      value: "Lara"
    },
    {
      id: "Nora",
      value: "Nora"
    }
  ];

  themeGroup!: FormGroup;

  constructor(private themeService: ThemeService) {
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
    // const theme = this.themeGroup.value.selectedTheme.id ?? "Aura";
    // this.themeService.toggleTheme(theme);
  }
}
