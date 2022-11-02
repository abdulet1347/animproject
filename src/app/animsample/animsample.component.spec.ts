import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimsampleComponent } from './animsample.component';

describe('AnimsampleComponent', () => {
  let component: AnimsampleComponent;
  let fixture: ComponentFixture<AnimsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimsampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
