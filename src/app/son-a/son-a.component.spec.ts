import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonAComponent } from './son-a.component';

describe('SonAComponent', () => {
  let component: SonAComponent;
  let fixture: ComponentFixture<SonAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
