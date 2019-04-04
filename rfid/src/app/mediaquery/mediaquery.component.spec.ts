import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaqueryComponent } from './mediaquery.component';

describe('MediaqueryComponent', () => {
  let component: MediaqueryComponent;
  let fixture: ComponentFixture<MediaqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
