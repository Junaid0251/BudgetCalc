import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRemarkComponent } from './budget-remark.component';

describe('BudgetRemarkComponent', () => {
  let component: BudgetRemarkComponent;
  let fixture: ComponentFixture<BudgetRemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetRemarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
