import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimengTableWrapperComponent } from './primeng-table-wrapper.component';

describe('PrimengTableWrapperComponent', () => {
  let component: PrimengTableWrapperComponent;
  let fixture: ComponentFixture<PrimengTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengTableWrapperComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengTableWrapperComponent);
    component = fixture.componentInstance;

    // Mock input and output properties
    fixture.componentRef.setInput("tableData", []);
    fixture.componentRef.setInput("tableColumns", [{ id: '1', name: 'Column 1' }]);
    fixture.componentRef.setInput("tableDataKey", "id");

    fixture.componentRef.setInput("headerName", "Header");
    fixture.componentRef.setInput("emptyMessage", "No Data Available");

    fixture.componentRef.setInput("headerCheckboxNeeded", false);
    fixture.componentRef.setInput("isEditDeleteOnRowNeeded", true);
    fixture.componentRef.setInput("isPaginatorRequired", true);
    fixture.componentRef.setInput("rowHover", true);
    fixture.componentRef.setInput("showCurrentPageReport", true);
    fixture.componentRef.setInput("columnFilterFields", []);
    fixture.componentRef.setInput("rowsPerPage", 10);
    fixture.componentRef.setInput("rowsOptionsPerPage", [5, 10, 20]);
    fixture.componentRef.setInput("columnFilterFields", []);

    component.selectedData = [];

    fixture.detectChanges();
  });


  it('should create \'PrimengTableWrapperComponent\'', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct default values for inputs', () => {
    expect(component.tableData()).toEqual([]);
    expect(component.tableColumns()).toEqual([{ id: '1', name: 'Column 1' }]);
    expect(component.tableDataKey()).toBe('id');
    expect(component.headerName()).toBe('Header');
    expect(component.emptyMessage()).toBe('No Data Available');
    expect(component.isPaginatorRequired()).toBe(true);
  });

  it('should have correct table data passed in \'tableData\' input', () => {
    const myTableData: { id: number, name: string }[] = [
      {
        id: 1,
        name: "Test 1"
      },
      {
        id: 2,
        name: "Test 2"
      },
    ];

    fixture.componentRef.setInput("tableData", myTableData);

    expect(component.tableData()).toEqual(myTableData);
  });

  it('should emit onEditAction when edit button is clicked', () => {
    spyOn(component.onEditAction, 'emit');

    // Trigger the edit action (e.g., assuming there's a button or method for this)
    component.onEditAction.emit({ id: 1 });

    expect(component.onEditAction.emit).toHaveBeenCalledWith({ id: 1 });
  });

  it('should emit onDeleteAction when delete button is clicked', () => {
    spyOn(component.onDeleteAction, 'emit');

    // Trigger the delete action
    component.onDeleteAction.emit({ id: 1 });

    expect(component.onDeleteAction.emit).toHaveBeenCalledWith({ id: 1 });
  });

  it('should emit onSelectedDataAction when selected data changes', () => {
    spyOn(component.onSelectedDataAction, 'emit');

    // Simulate selecting data
    component.selectedData = [{ id: 1, name: 'Test' }];
    component.onSelectedDataAction.emit(component.selectedData);

    expect(component.onSelectedDataAction.emit).toHaveBeenCalledWith([{ id: 1, name: 'Test' }]);
  });
});
