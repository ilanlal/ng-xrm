import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XrmClientComponent } from './xrm-client.component';

describe('XrmClientServiceComponent', () => {
  let component: XrmClientComponent;
  let fixture: ComponentFixture<XrmClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XrmClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XrmClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
