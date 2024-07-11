export const navbarData = [
  {
    routeLink: '/Principal',
    icon: 'fal fa-home',
    label: 'INICIO',
 
    expanded: false
  },

  {
    
    icon: 'fa fa-cart-plus',
    label: 'Pedidos',
    items: [
      {
        routeLink: '/Principal/PedidosPendientes',
        icon: 'fal fa-clock',
        label: 'Pendientes'
      },
      {
        routeLink: '/Principal/PedidosEnviados',
        icon: 'fa fa-paper-plane',
        label: 'Enviados'
      }

    ],
    expanded: false
  },



  {
    
    icon: 'fa fa-book',
    label: 'Reservas',
    items: [
      {
        routeLink: '/Principal/ReservaNormal',
        icon: 'fa fa-life-ring',
        label: 'Normal'
      },
      {
        routeLink: '/Principal/ReservaVIP',
        icon: 'fa fa-diamond',
        label: 'VIP'
      }
    ],
    expanded: false
  },
 
  


];
