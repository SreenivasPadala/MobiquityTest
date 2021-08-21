import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedaysdetailsComponent } from './fivedaysdetails.component';

describe('FivedaysdetailsComponent', () => {
  let component: FivedaysdetailsComponent;
  let fixture: ComponentFixture<FivedaysdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivedaysdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivedaysdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
