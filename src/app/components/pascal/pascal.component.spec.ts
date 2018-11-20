import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PascalComponent } from './pascal.component';

describe('PascalComponent', () => {
  let component: PascalComponent;
  let fixture: ComponentFixture<PascalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PascalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PascalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
