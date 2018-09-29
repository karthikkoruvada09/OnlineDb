import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsstudComponent } from './notificationsstud.component';

describe('NotificationsstudComponent', () => {
  let component: NotificationsstudComponent;
  let fixture: ComponentFixture<NotificationsstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
