import { Component, signal, ViewChild } from '@angular/core';
import { PrimeNgModule, } from '@app/shared/modules/prime-ng.module';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';

@Component({
  selector: 'app-dynamic-hierarchy',
  imports: [PrimeNgModule],
  templateUrl: './dynamic-hierarchy.component.html',
  styleUrl: './dynamic-hierarchy.component.scss'
})
export class DynamicHierarchyComponent {
  @ViewChild('contextMenu') cm!: ContextMenu;

  items = signal<MenuItem[]>([]);
  contextMenuItems = signal<MenuItem[]>([]);

  ngOnInit() {
    this.initializeTree();
    this.initializeContextMenu();
  }

  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items.set(this.toggleAllRecursive(this.items(), expanded));
  }

  addNode() {
    const newNode: MenuItem = {
      label: 'Updated Devices',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Phone 1',
          icon: 'pi pi-mobile'
        },
        {
          label: 'Desktop 2',
          icon: 'pi pi-desktop'
        },
        {
          label: 'Tablet 2',
          icon: 'pi pi-tablet'
        }
      ]
    };

    const tr = this.items().map(item => {
      if (item.label === "Upload") {
        item.items?.push(newNode);
      }
    }

    )

    // this.items = [...this.items, newNode];
  }

  onContext(action: string) {
    alert(`Context: ${action}`);
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.cm.show(event);
  }

  processRightClickEvent(event: MenuItemCommandEvent) {
    const mouseEvent = event.originalEvent as MouseEvent;

    if (mouseEvent.button !== 2) {
      return;
    }

    mouseEvent.preventDefault();
    console.log('Right click');
    this.cm.show(mouseEvent);
  }

  processRightClickEvent2(event: MouseEvent) {

    if (event.button !== 2) {
      return;
    }

    event.preventDefault();
    console.log('Right click', event);
    this.cm.appendTo = "body";
    this.cm.target = event.AT_TARGET.toString();
    this.cm.show(event);
  }

  processRightClickEvent3(event: MouseEvent, item: MenuItem) {

    if (event.button !== 2) {
      return;
    }

    event.preventDefault();
    console.log('Right click', event);
    console.log('item ', item);
    this.cm.appendTo = "body";
    this.cm.target = event.AT_TARGET.toString();
    this.cm.show(event);
  }

  doTheAction(event: any) {
    console.log('event action : ', event);

  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
      menuItem.expanded = expanded;
      if (menuItem.items) {
        menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
      }
      return menuItem;
    });
  }

  private areAllItemsExpanded(): boolean {
    return this.items().every((menuItem) => menuItem.expanded);
  }

  private initializeTree() {
    this.items.set([
      {
        label: 'Files',
        icon: 'dehaze',
        iconClass: "material-symbols-outlined",
        items: [
          {
            label: 'Documents',
            icon: 'docs',
            iconClass: "material-symbols-outlined",
            items: [
              {
                label: 'Invoices',
                icon: 'picture_as_pdf',
                iconClass: "material-icons",
                items: [
                  {
                    label: 'Pending',
                    icon: 'block',
                    iconClass: "material-icons",
                  },
                  {
                    label: 'Paid',
                    icon: 'paid',
                    iconClass: "material-icons",
                  }
                ]
              },
              {
                label: 'Clients',
                icon: 'groups',
                iconClass: "material-icons",
              }
            ]
          },
          {
            label: 'Images',
            icon: 'add_photo_alternate',
            iconClass: "material-icons",
            items: [
              {
                label: 'Logos',
                icon: 'shapes',
                iconClass: "material-icons",
              }
            ]
          }
        ]
      },
      {
        label: 'Cloud',
        icon: 'cloud',
        iconClass: "material-icons",
        items: [
          {
            label: 'Upload',
            icon: 'arrow_warm_up',
            iconClass: "material-symbols-outlined",
          },
          {
            label: 'Download',
            icon: 'arrow_cool_down',
            iconClass: "material-symbols-outlined",
          },
          {
            label: 'Sync',
            icon: 'autorenew',
            iconClass: "material-symbols-outlined",
          }
        ]
      },
      {
        label: 'Devices',
        icon: 'desktop_windows',
        iconClass: "material-icons",
        items: [
          {
            label: 'Phone',
            icon: 'aod',
            iconClass: "material-icons",
          },
          {
            label: 'Desktop',
            icon: 'desktop_windows',
            iconClass: "material-icons",
          },
          {
            label: 'Tablet',
            icon: 'fullscreen_portrait',
            iconClass: "material-symbols-outlined",
          }
        ]
      }
    ]);
  }

  private initializeContextMenu() {
    this.contextMenuItems.set([
      {
        label: 'Add Item',
        icon: 'add',
        iconClass: "material-symbols-outlined",
        command: () => {
          // navigate via router link
        }
      },
      {
        separator: true,
      },
      {
        label: 'Remove Item',
        icon: 'close',
        iconClass: "material-icons",
      }
    ]);
  }
}
