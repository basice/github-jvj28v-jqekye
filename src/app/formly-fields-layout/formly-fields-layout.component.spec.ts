import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlyFieldsLayoutComponent} from './formly-fields-layout.component';

describe('FormlyFieldsLayoutComponent', () => {
  let component: FormlyFieldsLayoutComponent;
  let fixture: ComponentFixture<FormlyFieldsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyFieldsLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFieldsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
