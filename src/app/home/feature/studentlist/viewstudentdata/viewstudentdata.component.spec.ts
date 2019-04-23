import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentdataComponent } from './viewstudentdata.component';

describe('ViewstudentdataComponent', () => {
  let component: ViewstudentdataComponent;
  let fixture: ComponentFixture<ViewstudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
