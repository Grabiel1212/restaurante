import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  public objunico: any = {};
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.isLocalStorageAvailable) {
      let token = localStorage.getItem("token") as string;
      if (token) {
        this.objunico = this.decodificarJwt(token);
        console.log("mi objeto único", this.objunico);
        localStorage.setItem('objunico', JSON.stringify(this.objunico));
      
        this.router.navigate(['/']); // Redirigir al componente home

      } else {
        console.error('No token found in localStorage.');
      }
    } else {
      console.error('LocalStorage is not available. Unable to store token.');
    }
  }

  private decodificarJwt(token: string): any {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
     
    return JSON.parse(jsonPayload);
  }
}