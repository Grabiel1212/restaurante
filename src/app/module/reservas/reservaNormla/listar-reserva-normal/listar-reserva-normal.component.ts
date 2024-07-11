import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ReservaR } from '../../../../core/models/ReservaR';


@Component({
  selector: 'app-listar-reserva-normal',
  standalone: true,
  imports: [ButtonModule,TableModule],
  templateUrl: './listar-reserva-normal.component.html',
  styleUrl: './listar-reserva-normal.component.scss'
})
export class ListarReservaNormalComponent {

  ButtonStyle={
   
    width : '2.3rem',
    height:'2.3rem',
    'margin-left':'1rem'
  }

  Reservarr : ReservaR [] = [
    {
      id : 1,
      cliente  : 'juan',
      mesa: '2',
      fecha: '12/5/2024' ,
      hora: '9:00:00',
      pagado: 'si'
    
    }
    
  ]
}
