import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestudComponent } from './profilestud.component';

describe('ProfilestudComponent', () => {
  let component: ProfilestudComponent;
  let fixture: ComponentFixture<ProfilestudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilestudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
