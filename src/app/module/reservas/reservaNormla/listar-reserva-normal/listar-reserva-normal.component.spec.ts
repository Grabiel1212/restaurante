import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservaNormalComponent } from './listar-reserva-normal.component';

describe('ListarReservaNormalComponent', () => {
  let component: ListarReservaNormalComponent;
  let fixture: ComponentFixture<ListarReservaNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarReservaNormalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarReservaNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
