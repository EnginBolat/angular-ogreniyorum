import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivenComponent } from './modeldriven.component';

describe('ModeldrivenComponent', () => {
  let component: ModeldrivenComponent;
  let fixture: ComponentFixture<ModeldrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeldrivenComponent]
    });
    fixture = TestBed.createComponent(ModeldrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
