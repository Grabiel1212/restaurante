import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservaVIPComponent } from './listar-reserva-vip.component';

describe('ListarReservaVIPComponent', () => {
  let component: ListarReservaVIPComponent;
  let fixture: ComponentFixture<ListarReservaVIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarReservaVIPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarReservaVIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
