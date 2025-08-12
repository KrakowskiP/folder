import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFileUploadButton } from './app-file-upload-button';

describe('AppFileUploadButton', () => {
  let component: AppFileUploadButton;
  let fixture: ComponentFixture<AppFileUploadButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFileUploadButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFileUploadButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
