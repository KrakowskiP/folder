import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFileTree } from './app-file-tree';

describe('AppFileTree', () => {
  let component: AppFileTree;
  let fixture: ComponentFixture<AppFileTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFileTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFileTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
