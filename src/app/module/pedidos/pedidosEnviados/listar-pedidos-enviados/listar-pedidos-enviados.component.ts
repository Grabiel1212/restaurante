import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Pedidosp } from '../../../../core/models/PedidoP';
import { TYPE_MODAL_CREAR,TYPE_MODAL_VER,TYPE_MODAL_EDITAR} from '../../../../shared/utils/constans';
import { FooterModalComponent } from '../../../../shared/components/footer-modal/footer-modal.component';
import { PedidosModalComponent } from '../../pedidos-modal/pedidos-modal.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'; // Asegúrate de importar DynamicDialogRef aquí
import { ClienteService } from '../../../../core/services/cliente.service';

@Component({
  selector: 'app-listar-pedidos-enviados',
  standalone: true,
  imports: [ButtonModule, TableModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './listar-pedidos-enviados.component.html',
  styleUrls: ['./listar-pedidos-enviados.component.scss'],
  providers: [DialogService]
})
export class ListarPedidosEnviadosComponent implements OnInit {
  @ViewChild('TblPedidoListar') TblPedidoListar: Table | undefined;

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,// defino mis serviocs
    private clienteService : ClienteService
  ) {}


  pedidosE: any= [];
  async ngOnInit() {
  

    const response:any = await this.clienteService.listarCliente();
    console.log('response',response);
    this.pedidosE = response.data;
  }

  ButtonStyle = {
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '1rem'
  };

 



 

  applyFilterGlobal($event: any, stringVal: string) {
    this.TblPedidoListar?.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }

  
  onClickCrearPedido() {
   
    
    this.ref = this.dialogService.open(PedidosModalComponent, {
      header: 'Crear un Pedido',
      width: '80vw',
      height: '80vh',
      templates:{
        footer: FooterModalComponent
      },
      data: {
        typeModal: TYPE_MODAL_CREAR,
       // data: this.nuevoPedido // Pasa el nuevo pedido al modal
      }
        
    });

    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log('Pedido creado:', data); // Aquí deberías manejar la lógica para guardar el pedido
        // Por ejemplo, puedes agregarlo a la lista de pedidosE o realizar una llamada API para guardar en backend
      }
    });
    
  }
    

  onClickVerPedido(pedido: Pedidosp) {
    console.log('onClickVerPedido', pedido);
    this.ref = this.dialogService.open(PedidosModalComponent, {
      header: 'Información de Pedido',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent
      },
      data: {
        typeModal: TYPE_MODAL_VER,
        data: pedido
      }
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log('SE HA CERRADO EL MODAL:', data);
    });
  }

  onClickEditarPedido(pedido: Pedidosp) {
    console.log('onClickEditarPedido', pedido);
    this.ref = this.dialogService.open(PedidosModalComponent, {
      header: 'Modificar Pedido',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent
      },
      data: {
        typeModal: TYPE_MODAL_EDITAR,
        data: pedido
      }
    });

    
    this.ref.onClose.subscribe((data: any) => {
      /*
      // Aquí puedes manejar la respuesta después de cerrar el modal de edición
      if (data && data.success) {
        // Actualizar el pedido modificado en la lista
        console.log('Pedido modificado:', data.pedido);
        const index = this.pedidosE.findIndex(=> p.id === data.pedido.id);
        if (index !== -1) {
          this.pedidosE[index] = data.pedido;
        }
      } else {
        console.log('El modal se cerró sin guardar cambios.');
      }
        */
    });
    
  }
}







