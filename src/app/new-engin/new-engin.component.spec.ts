import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnginComponent } from './new-engin.component';

describe('NewEnginComponent', () => {
  let component: NewEnginComponent;
  let fixture: ComponentFixture<NewEnginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEnginComponent]
    });
    fixture = TestBed.createComponent(NewEnginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
