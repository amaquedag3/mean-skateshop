import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasUserComponent } from './altas-user.component';

describe('AltasUserComponent', () => {
  let component: AltasUserComponent;
  let fixture: ComponentFixture<AltasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
