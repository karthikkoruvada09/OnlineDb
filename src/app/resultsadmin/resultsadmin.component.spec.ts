import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsadminComponent } from './resultsadmin.component';

describe('ResultsadminComponent', () => {
  let component: ResultsadminComponent;
  let fixture: ComponentFixture<ResultsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
