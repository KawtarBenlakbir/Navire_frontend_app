import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrueComponent } from './grue.component';

describe('GrueComponent', () => {
  let component: GrueComponent;
  let fixture: ComponentFixture<GrueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrueComponent]
    });
    fixture = TestBed.createComponent(GrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
