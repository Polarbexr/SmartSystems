import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoHacerloComponent } from './como-hacerlo.component';

describe('ComoHacerloComponent', () => {
  let component: ComoHacerloComponent;
  let fixture: ComponentFixture<ComoHacerloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComoHacerloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComoHacerloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
