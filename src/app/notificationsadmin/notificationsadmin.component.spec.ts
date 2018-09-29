import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsadminComponent } from './notificationsadmin.component';

describe('NotificationsadminComponent', () => {
  let component: NotificationsadminComponent;
  let fixture: ComponentFixture<NotificationsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
