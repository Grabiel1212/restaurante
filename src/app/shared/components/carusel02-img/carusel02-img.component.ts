import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-carusel02-img',
  standalone: true,
  imports: [CardModule,ImageModule,PanelModule],
  templateUrl: './carusel02-img.component.html',
  styleUrl: './carusel02-img.component.scss'
})
export class Carusel02ImgComponent {
  

}
