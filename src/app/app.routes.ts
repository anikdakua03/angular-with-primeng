import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        title: "Home",
        path: "",
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
    },
    {
        title: "Showcase",
        path: "showcase",
        // canActivate: [authGuard],
        loadChildren: () => import('./components/showcase/showcase.routes').then(childRoutes => childRoutes.showcaseRoutes)
    },
    {
        title: "Page Not Found",
        path: "**",
        pathMatch: 'full',
        loadComponent: () => import('./components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
    }
];
