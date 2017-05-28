import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorListComponent } from './interior-list.component';

describe('InteriorListComponent', () => {
  let component: InteriorListComponent;
  let fixture: ComponentFixture<InteriorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
