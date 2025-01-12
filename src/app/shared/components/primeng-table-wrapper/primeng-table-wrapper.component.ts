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
  tableData = input.required<any[]>();
  tableColumns = input.required<{ id: string, name: string }[]>();
  tableDataKey = input.required<string>();

  headerName = input.required<string>();
  emptyMessage = input.required<string>();

  headerCheckboxNeeded = input<boolean>(false);
  isEditDeleteOnRowNeeded = input<boolean>(true);
  isPaginatorRequired = input<boolean>(true);
  rowHover = input<boolean>(true);
  showCurrentPageReport = input<boolean>(true);

  columnFilterFields = input<string[]>([]);
  rowsPerPage = input<number>(10);
  rowsOptionsPerPage = input<number[]>([]);

  onEditAction = output<any>();
  onDeleteAction = output<any>();
  onSelectedDataAction = output<any>();

  selectedData!: any[] | null;
}
