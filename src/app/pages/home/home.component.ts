import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaruselImgComponent } from '../../shared/components/carusel-img/carusel-img.component';
import { Carusel02ImgComponent } from '../../shared/components/carusel02-img/carusel02-img.component';
import { MenuBarComponent } from "../../shared/components/menu-bar/menu-bar.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ButtonModule, RouterOutlet, CaruselImgComponent, Carusel02ImgComponent, MenuBarComponent]
})
export class HomeComponent {
  
}
