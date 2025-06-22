import { Component, input, output } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-primeng-table-wrapper',
  imports: [TableModule, IconFieldModule, InputTextModule, InputIconModule],
  templateUrl: './primeng-table-wrapper.component.html',
  styleUrl: './primeng-table-wrapper.component.scss'
})
export class PrimengTableWrapperComponent {
  readonly tableData = input.required<unknown[]>();
  readonly tableColumns = input.required<{ id: string, name: string }[]>();
  readonly tableDataKey = input.required<string>();

  readonly headerName = input.required<string>();
  readonly emptyMessage = input.required<string>();

  readonly headerCheckboxNeeded = input<boolean>(false);
  readonly isEditDeleteOnRowNeeded = input<boolean>(true);
  readonly isPaginatorRequired = input<boolean>(true);
  readonly rowHover = input<boolean>(true);
  readonly showCurrentPageReport = input<boolean>(true);

  readonly columnFilterFields = input<string[]>([]);
  readonly rowsPerPage = input<number>(10);
  readonly rowsOptionsPerPage = input<number[]>([]);

  onEditAction = output<unknown>();
  onDeleteAction = output<unknown>();
  onSelectedDataAction = output<unknown>();

  selectedData!: unknown[] | null;
}
