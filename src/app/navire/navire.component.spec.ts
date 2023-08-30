import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavireComponent } from './navire.component';

describe('NavireComponent', () => {
  let component: NavireComponent;
  let fixture: ComponentFixture<NavireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavireComponent]
    });
    fixture = TestBed.createComponent(NavireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
