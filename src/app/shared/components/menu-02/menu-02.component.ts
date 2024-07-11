import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/models/AuthService';



@Component({
  selector: 'app-menu-02',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-02.component.html',
  styleUrl: './menu-02.component.scss'
})
export class Menu02Component implements OnInit{
 
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  public objunico: any;

  constructor() { }

  ngOnInit(): void {
    if (this.isLocalStorageAvailable) {
      let storedObjunico = localStorage.getItem('objunico');
      if (storedObjunico) {
        this.objunico = JSON.parse(storedObjunico);
        console.log('Objeto único recuperado:', this.objunico);
      } else {
        console.error('No objunico found in localStorage.');
        // Manejar caso sin objunico en localStorage
      }
    }
  }
}
