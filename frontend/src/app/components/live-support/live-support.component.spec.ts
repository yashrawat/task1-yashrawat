import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSupportComponent } from './live-support.component';

describe('LiveSupportComponent', () => {
  let component: LiveSupportComponent;
  let fixture: ComponentFixture<LiveSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
