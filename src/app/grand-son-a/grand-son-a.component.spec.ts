import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandSonAComponent } from './grand-son-a.component';

describe('GrandSonAComponent', () => {
  let component: GrandSonAComponent;
  let fixture: ComponentFixture<GrandSonAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandSonAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandSonAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
