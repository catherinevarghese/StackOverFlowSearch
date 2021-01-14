import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSearchFormComponent } from './advance-search-form.component';

describe('AdvanceSearchFormComponent', () => {
  let component: AdvanceSearchFormComponent;
  let fixture: ComponentFixture<AdvanceSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
