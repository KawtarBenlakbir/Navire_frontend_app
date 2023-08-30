import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNavireComponent } from './new-navire.component';

describe('NewNavireComponent', () => {
  let component: NewNavireComponent;
  let fixture: ComponentFixture<NewNavireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewNavireComponent]
    });
    fixture = TestBed.createComponent(NewNavireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
