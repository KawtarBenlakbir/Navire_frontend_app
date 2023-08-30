import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEquipeComponent } from './new-equipe.component';

describe('NewEquipeComponent', () => {
  let component: NewEquipeComponent;
  let fixture: ComponentFixture<NewEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEquipeComponent]
    });
    fixture = TestBed.createComponent(NewEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
