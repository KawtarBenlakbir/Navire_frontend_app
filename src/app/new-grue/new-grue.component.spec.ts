import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGrueComponent } from './new-grue.component';

describe('NewGrueComponent', () => {
  let component: NewGrueComponent;
  let fixture: ComponentFixture<NewGrueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewGrueComponent]
    });
    fixture = TestBed.createComponent(NewGrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
