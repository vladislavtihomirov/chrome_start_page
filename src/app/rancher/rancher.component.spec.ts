import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RancherComponent } from './rancher.component';

describe('RancherComponent', () => {
  let component: RancherComponent;
  let fixture: ComponentFixture<RancherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RancherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RancherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
