import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../../core/models/PhotoService';


@Component({
  selector: 'app-carusel-img',
  standalone: true,
  imports: [GalleriaModule ],
  templateUrl: './carusel-img.component.html',
  styleUrls: ['./carusel-img.component.scss'],
})
export class CaruselImgComponent implements OnInit {

  images: any[] = []; // Inicializa la variable
  allImages: any[] = []; // Almacena todas las imágenes
  

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getImages().then((images) => {
      this.images = images;
      this.allImages = images; // Almacena todas las imágenes inicialmente
    });
  }





}

       
  
  
