import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaPedidosPendientesComponent } from './module/pedidos/pedidosPendientes/lista-pedidos-pendientes/lista-pedidos-pendientes.component';
import { ListarPedidosEnviadosComponent } from './module/pedidos/pedidosEnviados/listar-pedidos-enviados/listar-pedidos-enviados.component';
import { ListarReservaNormalComponent } from './module/reservas/reservaNormla/listar-reserva-normal/listar-reserva-normal.component';
import { ListarReservaSemiVIPComponent } from './module/reservas/reservaSemiVIP/listar-reserva-semi-vip/listar-reserva-semi-vip.component';
import { ListarReservaVIPComponent } from './module/reservas/reservaVIP/listar-reserva-vip/listar-reserva-vip.component';
import { ListarUserComponent } from './module/usuarios/listar-user/listar-user.component';

import { LoginUserComponent } from './shared/components/login-user/login-user.component';
import { CallbackComponent } from './shared/components/callback/callback.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Principal' },
  {path: 'Login', component:LoginUserComponent},

  {
   
    path: 'Principal', component: MainLayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'Home' },
      { path: 'Home', component: HomeComponent },
      { path: 'PedidosEnviados', component: ListarPedidosEnviadosComponent },
      { path: 'PedidosPendientes', component: ListaPedidosPendientesComponent },
      { path: 'ReservaNormal', component: ListarReservaNormalComponent },
      { path: 'ReservaSemiVIP', component: ListarReservaSemiVIPComponent },
      { path: 'ReservaVIP', component: ListarReservaVIPComponent },
      { path: 'Usuarios', component: ListarUserComponent },
      { path: 'auth-callback', component: CallbackComponent },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



