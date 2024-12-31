import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContatcComponent } from './contact/contatc.component';
import { OrderComponent } from './order/order.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [

    {
        path:'Home',
        component:HomeComponent
    },
    {
        path:'Menu',
        component:MenuComponent
    },
    {
        path:'About',
        component:AboutComponent
    },
    {
        path:'Contact',
        component:ContatcComponent
    },
    {
        path:'Order',
        component:OrderComponent
    },
    {
        path:'Service',
        component:ServiceComponent
    }
];
