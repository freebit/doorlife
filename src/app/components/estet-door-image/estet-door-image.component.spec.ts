import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstetDoorImageComponent } from './estet-door-image.component';

describe('EstetDoorImageComponent', () => {
  let component: EstetDoorImageComponent;
  let fixture: ComponentFixture<EstetDoorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstetDoorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstetDoorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
