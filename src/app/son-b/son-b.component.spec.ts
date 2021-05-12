import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonBComponent } from './son-b.component';

describe('SonBComponent', () => {
  let component: SonBComponent;
  let fixture: ComponentFixture<SonBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
