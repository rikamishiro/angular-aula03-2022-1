import { Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FormFavoritoComponent } from './modules/favorito-edicao/components/form-favorito/form-favorito.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/favorito-edicao/favorito-edicao.module',
    ).then(m => m.FavoritoEdicaoModule),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/sobre'
  },
];
