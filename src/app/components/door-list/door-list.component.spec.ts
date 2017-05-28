import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorListComponent } from './door-list.component';

describe('DoorListComponent', () => {
  let component: DoorListComponent;
  let fixture: ComponentFixture<DoorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
