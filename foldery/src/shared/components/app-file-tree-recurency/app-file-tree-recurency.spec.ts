import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFileTreeRecurency } from './app-file-tree-recurency';

describe('AppFileTreeRecurency', () => {
  let component: AppFileTreeRecurency;
  let fixture: ComponentFixture<AppFileTreeRecurency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFileTreeRecurency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFileTreeRecurency);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
