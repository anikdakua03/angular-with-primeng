import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTableDataComponent } from './add-edit-table-data.component';

describe('AddEditTableDataComponent', () => {
  let component: AddEditTableDataComponent;
  let fixture: ComponentFixture<AddEditTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditTableDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
