import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from '../../components/chatbot/chatbot.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Menu02Component } from '../../components/menu-02/menu-02.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, ChatbotComponent , MenuBarComponent,CommonModule ,Menu02Component],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'] // Corrección aquí
})
export class MainLayoutComponent {
  collapsed = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.collapsed = currentRoute.startsWith('/Principal/Home'); // Ajusta según tus rutas principales
      }
    });
  }

  handleSideNavToggle(event: SideNavToggle): void {
    this.collapsed = event.collapsed;
  }
 }
