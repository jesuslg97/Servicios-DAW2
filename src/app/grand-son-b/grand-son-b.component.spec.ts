import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandSonBComponent } from './grand-son-b.component';

describe('GrandSonBComponent', () => {
  let component: GrandSonBComponent;
  let fixture: ComponentFixture<GrandSonBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandSonBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandSonBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
