import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SytemAlertComponent } from './system-alert.component';

describe('SytemAlertComponent', () => {
  let component: SytemAlertComponent;
  let fixture: ComponentFixture<SytemAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SytemAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SytemAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
