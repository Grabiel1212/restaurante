import { Component,OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { setTimeout } from 'timers/promises';
import { Pedidosp} from '../../../core/models/PedidoP';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constans';

@Component({
  selector: 'app-pedidos-modal',
  standalone: true,
  imports: [FormsModule,InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './pedidos-modal.component.html',
  styleUrl: './pedidos-modal.component.scss'
})
export class PedidosModalComponent implements OnInit {

  
  pedido: Pedidosp = {
    id: 0,
    nombre: '',
    apellidos: '',
    fecha: '',
    menu: '',
    cantidad: 0,
    total: 0,
  };

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    console.log('AlumnosModalComponent',this.config.data);
    if(this.config.data.data){
     this.pedido = this.config.data.data;
    }
   }
 
   isModoVer():boolean{
     return this.config.data.typeModal == TYPE_MODAL_VER
   }
 
 

}

