import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsstudComponent } from './resultsstud.component';

describe('ResultsstudComponent', () => {
  let component: ResultsstudComponent;
  let fixture: ComponentFixture<ResultsstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
