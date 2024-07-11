import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../utils/constans';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-modal',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './footer-modal.component.html',
  styleUrl: './footer-modal.component.scss'
})
export class FooterModalComponent implements OnInit {
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ){

  }

  ngOnInit(): void {
    console.log('FooterModalComponent::this.config.data',this.config.data);
    
  }

  cerrarModal(){
    this.ref.close();
  }

  isModoVer():boolean{
    return this.config.data.typeModal == TYPE_MODAL_VER
  }

}