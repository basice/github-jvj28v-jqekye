import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormlyTabsAsTypeComponent} from './formly-tabs-as-type.component';

describe('FormlyTabsAsTypeComponent', () => {
  let component: FormlyTabsAsTypeComponent;
  let fixture: ComponentFixture<FormlyTabsAsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyTabsAsTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyTabsAsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
