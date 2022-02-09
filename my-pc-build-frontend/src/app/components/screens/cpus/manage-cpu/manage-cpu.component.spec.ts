import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCpuComponent } from './manage-cpu.component';

describe('ManageCpuComponent', () => {
  let component: ManageCpuComponent;
  let fixture: ComponentFixture<ManageCpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
