import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistDashboardComponent } from './psychologist-dashboard.component';

describe('PsychologistDashboardComponent', () => {
  let component: PsychologistDashboardComponent;
  let fixture: ComponentFixture<PsychologistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologistDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
