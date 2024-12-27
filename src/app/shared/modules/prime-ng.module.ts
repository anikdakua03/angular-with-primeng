import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { TabsModule } from 'primeng/tabs';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputIconModule } from 'primeng/inputicon';
import { Select, SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { SelectButton } from 'primeng/selectbutton';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';
import { DrawerModule } from 'primeng/drawer'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Select,
    SelectButton,
    ToggleSwitch,
  ],
  exports: [
    CommonModule,
    ButtonModule, TableModule, CardModule, FloatLabelModule, ToastModule, TabsModule, ToolbarModule, IconFieldModule, SplitButtonModule, InputIconModule, SelectModule, SelectButton, InputTextModule, ToggleSwitch, BadgeModule, OverlayBadgeModule, AvatarModule, DrawerModule,
    // Deprecated
    SidebarModule,
    DropdownModule
  ]
})
export class PrimeNgModule { }
