import { Component } from '@angular/core';

import { OverlayPanelModule } from 'primeng/overlaypanel';


import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [OverlayPanelModule,OverlayPanelModule,InputGroupModule, InputGroupAddonModule, ButtonModule, InputTextModule, ChipsModule, CommonModule ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
 
})
export class ChatbotComponent {
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
];
 
     
  MensajePrueva():void{
    console.log("Hola soy tu asistente virtual ,Rebecca")
  let  audio= new Audio();
  audio.src="assets/aud/IreneSaludo.wav"
  audio.load();
  audio.play().then(() => {
    console.log("Reproduciendo audio...");
  }).catch(error => {
    console.error("Error al reproducir el audio: ", error);
  });

  }

 
}
