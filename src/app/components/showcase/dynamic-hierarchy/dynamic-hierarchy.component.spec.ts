import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHierarchyComponent } from './dynamic-hierarchy.component';

describe('DynamicHierarchyComponent', () => {
  let component: DynamicHierarchyComponent;
  let fixture: ComponentFixture<DynamicHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicHierarchyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
