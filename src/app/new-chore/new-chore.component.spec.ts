import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChoreComponent } from './new-chore.component';

describe('NewChoreComponent', () => {
  let component: NewChoreComponent;
  let fixture: ComponentFixture<NewChoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
