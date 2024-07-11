import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
    
      { itemImageSrc: 'assets/img/fondo02.jpg' },
      { itemImageSrc: 'assets/img/fondo03.jpg' },
      { itemImageSrc: 'assets/img/fondo04.jpg' },
      { itemImageSrc: 'assets/img/fondo05.jpg' },
      { itemImageSrc: 'assets/img/fondo06.jpg' }
      
      
    ];
    return Promise.resolve(images);
  }
}
