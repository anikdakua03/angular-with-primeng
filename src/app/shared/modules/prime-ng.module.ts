import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DrawerModule } from 'primeng/drawer';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Select, SelectModule } from 'primeng/select';
import { SelectButton } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

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
    DropdownModule,
    PanelMenuModule,
    DialogModule, SplitterModule, FluidModule, InputNumberModule, TooltipModule
  ]
})
export class PrimeNgModule { }
