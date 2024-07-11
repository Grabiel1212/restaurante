import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto indica que el servicio se proporciona en el módulo raíz de la aplicación
})
export class AuthService {

    public objunico: any = {};// Variable para almacenar las credenciales

  constructor() { }

  setObjunico(obj: any): void {
    this.objunico = obj; // Método para establecer las credenciales
  }

  getObjunico(): any {
    return this.objunico; // Método para obtener las credenciales
  }
}
