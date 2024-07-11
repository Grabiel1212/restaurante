import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Pedidosp } from '../../../../core/models/PedidoP';
import { TYPE_MODAL_CREAR, TYPE_MODAL_VER, TYPE_MODAL_EDITAR } from '../../../../shared/utils/constans';
import { FooterModalComponent } from '../../../../shared/components/footer-modal/footer-modal.component';
import { PedidosModalComponent } from '../../pedidos-modal/pedidos-modal.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-lista-pedidos-pendientes',
  standalone: true,
  imports: [ButtonModule, TableModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './lista-pedidos-pendientes.component.html',
  styleUrls: ['./lista-pedidos-pendientes.component.scss'],
  providers: [DialogService]
})
export class ListaPedidosPendientesComponent {
  @ViewChild('TblPedidoListar') TblPedidoListar: Table | undefined;

  ref: DynamicDialogRef | undefined;

  ButtonStyle = {
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '1rem'
  };

  pedidoss: Pedidosp[] = [
    { id: 1, nombre: 'Jose Mena', apellidos: 'Terrez Carrasco', fecha: '12/6/2024', menu: 'Arroz con Pollo', cantidad: 2, total: 58.9 },
    { id: 2, nombre: 'Julio', apellidos: 'Carrasco', fecha: '12/6/2024', menu: 'Chaufa', cantidad: 8, total: 100.5 },
    { id: 3, nombre: 'Estefany', apellidos: 'Lara Serrano', fecha: '17/6/2024', menu: 'Ceviche', cantidad: 1, total: 12.9 },
    { id: 4, nombre: 'Maria', apellidos: 'Barboza Luño', fecha: '12/6/2024', menu: 'Chuleta', cantidad: 1, total: 10.2 }
  ];

  nuevoPedido = {
    id: 0,
    nombre: '',
    apellidos: '',
    fecha: '',
    menu: '',
    cantidad: 0,
    total: 0
  };

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  applyFilterGlobal($event: any, stringVal: string) {
    this.TblPedidoListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  onClickCrearPedido() {
    this.ref = this.dialogService.open(PedidosModalComponent, {
      header: 'Crear un Pedido',
      width: '80vw',
      height: '80vh',
      templates: { footer: FooterModalComponent },
      data: { typeModal: TYPE_MODAL_CREAR, data: this.nuevoPedido }
    });

    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log('Pedido creado:', data);
        // Agregar el nuevo pedido a la lista
        this.pedidoss.push(data);
      }
    });
  }

  onClickVerPedido(pedido: Pedidosp) {
    this.ref = this.dialogService.open(PedidosModalComponent, {
      header: 'Información de Pedido',
      width: '80vw',
      height: '80vh',
      templates: { footer: FooterModalComponent },
      data: { typeModal: TYPE_MODAL_VER, data: pedido }
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log('Modal cerrado:', data);
    });
  }

  onClickEditarPedido(pedido: Pedidosp) {
    this.ref = this.dialogService.open(PedidosModalComponent, {
      header: 'Modificar Pedido',
      width: '80vw',
      height: '80vh',
      templates: { footer: FooterModalComponent },
      data: { typeModal: TYPE_MODAL_EDITAR, data: pedido }
    });

    this.ref.onClose.subscribe((data: any) => {
      if (data && data.success) {
        // Actualizar el pedido modificado en la lista
        const index = this.pedidoss.findIndex(p => p.id === data.pedidoss.id);
        if (index !== -1) {
          this.pedidoss[index] = data.pedidoss;
        }
      } else {
        console.log('El modal se cerró sin guardar cambios.');
      }
    });
  }
}
