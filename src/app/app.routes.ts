import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyComponentsComponent } from './components/my-components/my-components.component';

export const routes: Routes = [
    {
        title: "Home",
        path: "",
        component: MyComponentsComponent
    },
    {
        title: "Page Not Found",
        path: "**",
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];
