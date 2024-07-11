import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule, DOCUMENT } from '@angular/common';


import { FormsModule } from '@angular/forms';

declare var google:any;

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [CardModule,InputTextModule ,FormsModule,CommonModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent implements OnInit, AfterViewInit {
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  ngAfterViewInit(): void {
    // Inicializar el cliente de Google para el inicio de sesión
    google.accounts.id.initialize({
      client_id: "188764855889-qt6406fl2jh3is2kk5ou3e79kfsofkoe.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(this) // Vincular el contexto del método de callback
    });

    // Renderizar el botón de Google en el elemento con id 'buttonDiv'
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // Atributos de personalización
    );

    // Mostrar el diálogo de One Tap
    google.accounts.id.prompt();
  }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional para cuando el componente se inicializa
  }
  
  handleCredentialResponse(response: any) {
    console.log(response);

    if (response.credential) {
      if (this.isLocalStorageAvailable) {
        // Almacenar el token en localStorage
        localStorage.setItem("token", response.credential);
        // Redirigir a la página principal después del callback de autenticación
        document.location.href = "/Principal/auth-callback";
      } else {
        console.error('LocalStorage no está disponible. No se puede almacenar el token.');
        // Aquí puedes manejar el caso en el que localStorage no esté disponible
      }
    }
  }
}
