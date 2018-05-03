import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RogersComponent } from './rogers.component';

describe('RogersComponent', () => {
  let component: RogersComponent;
  let fixture: ComponentFixture<RogersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RogersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RogersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
