import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTableWrapperComponent } from './primeng-table-wrapper.component';

describe('PrimengTableWrapperComponent', () => {
  let component: PrimengTableWrapperComponent;
  let fixture: ComponentFixture<PrimengTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
