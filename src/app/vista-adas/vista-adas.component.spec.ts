import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdasComponent } from './vista-adas.component';

describe('VistaAdasComponent', () => {
  let component: VistaAdasComponent;
  let fixture: ComponentFixture<VistaAdasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaAdasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaAdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
