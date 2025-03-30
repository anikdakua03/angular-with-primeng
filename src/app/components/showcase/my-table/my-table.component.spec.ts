import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { DemoService } from '@app/services/demo.service';
import { TableDataStore } from '@app/store/table-data/table-data.store';
import { MyTableComponent } from './my-table.component';

fdescribe('MyTableComponent', () => {
  let component: MyTableComponent;
  let fixture: ComponentFixture<MyTableComponent>;
  // const store = TestBed.inject(TableDataStore);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTableComponent],
      providers: [provideHttpClient(), provideExperimentalZonelessChangeDetection(), TableDataStore, DemoService,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTableComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create \'MyTableComponent\'', () => {
    expect(component).toBeTruthy();
  });

  // it('should inject \'TableDataStore\'', () => {
  //   expect(store).toBeTruthy();
  // });

  it('should call \'AddEditModal\'', () => {
    spyOn(component, "openAddEditModal");

    component.openAddEditModal();

    expect(component.openAddEditModal).toHaveBeenCalledOnceWith();
    expect(component.showAddEditModal()).toBe(true);
  });
});
