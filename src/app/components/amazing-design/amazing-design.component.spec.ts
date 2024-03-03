import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingDesignComponent } from './amazing-design.component';

describe('AmazingDesignComponent', () => {
  let component: AmazingDesignComponent;
  let fixture: ComponentFixture<AmazingDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmazingDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazingDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
