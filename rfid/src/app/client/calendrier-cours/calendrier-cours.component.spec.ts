import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierCoursComponent } from './calendrier-cours.component';

describe('CalendrierCoursComponent', () => {
  let component: CalendrierCoursComponent;
  let fixture: ComponentFixture<CalendrierCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
