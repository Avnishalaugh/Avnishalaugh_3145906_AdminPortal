import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudentdataComponent } from './editstudentdata.component';

describe('EditstudentdataComponent', () => {
  let component: EditstudentdataComponent;
  let fixture: ComponentFixture<EditstudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
