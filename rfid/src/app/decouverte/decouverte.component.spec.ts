import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouverteComponent } from './decouverte.component';

describe('DecouverteComponent', () => {
  let component: DecouverteComponent;
  let fixture: ComponentFixture<DecouverteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecouverteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecouverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
