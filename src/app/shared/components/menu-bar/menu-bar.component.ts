import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @Input() collapsed: boolean = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.screenWidth = window.innerWidth;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  toggleSubMenu(item: any): void {
    if (item.items) {
      item.expanded = !item.expanded;
    }
  }

  clientId = '797666884299-ratknno9ehqinn3b3qun1hdipjdrt83r.apps.googleusercontent.com';
  redirectUri = 'http://localhost:4200/auth-callback';
  private scopes: string[] = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ];

  loginWithGoogle(): void {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scopes.join(' '))}`;
    window.location.href = authUrl;
  }
}
