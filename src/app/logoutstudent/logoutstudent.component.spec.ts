import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutstudentComponent } from './logoutstudent.component';

describe('LogoutstudentComponent', () => {
  let component: LogoutstudentComponent;
  let fixture: ComponentFixture<LogoutstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
