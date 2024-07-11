import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosEnviadosComponent } from './listar-pedidos-enviados.component';

describe('ListarPedidosEnviadosComponent', () => {
  let component: ListarPedidosEnviadosComponent;
  let fixture: ComponentFixture<ListarPedidosEnviadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPedidosEnviadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPedidosEnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
