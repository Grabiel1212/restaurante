import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosPendientesComponent } from './lista-pedidos-pendientes.component';

describe('ListaPedidosPendientesComponent', () => {
  let component: ListaPedidosPendientesComponent;
  let fixture: ComponentFixture<ListaPedidosPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPedidosPendientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPedidosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
