import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



interface SideNavToggle{
  screenWidth: number;
  collapsed : boolean;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'Proyect_Restaurante';
  isSideNavCollapsed=false;
screenWidth=0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;


  
    
  }


  constructor() { }

  getUserDisplayName(): string {
    try {
      // Paso 1: Obtener el perfil de usuario desde localStorage
      const userProfileString = localStorage.getItem('userProfile');

      // Paso 2: Parsear el perfil de usuario si existe
      const userProfile = userProfileString ? JSON.parse(userProfileString) : null;

      // Paso 3: Retornar el nombre del usuario si está disponible, de lo contrario 'Usuario'
      return userProfile ? userProfile.name : 'Usuario';
    } catch (error) {
      // Manejar errores: Loguear el error y retornar 'Usuario' por defecto
      console.error('Error al obtener el perfil de usuario desde localStorage:', error);
      return 'Usuario';
    }
  }
}
