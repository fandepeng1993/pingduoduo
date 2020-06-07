import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableTopComponent } from './scrollable-top.component';

describe('ScrollableTopComponent', () => {
  let component: ScrollableTopComponent;
  let fixture: ComponentFixture<ScrollableTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
