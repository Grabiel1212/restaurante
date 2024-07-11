import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carusel02ImgComponent } from './carusel02-img.component';

describe('Carusel02ImgComponent', () => {
  let component: Carusel02ImgComponent;
  let fixture: ComponentFixture<Carusel02ImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carusel02ImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Carusel02ImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
