import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeleteFileButton } from './app-delete-file-button';

describe('AppDeleteFileButton', () => {
  let component: AppDeleteFileButton;
  let fixture: ComponentFixture<AppDeleteFileButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDeleteFileButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDeleteFileButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
