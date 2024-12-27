import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { authGuard } from './shared/guards/auth.guard';
import { MyTableComponent } from './components/showcase/my-table/my-table.component';
import { MyChartComponent } from './components/showcase/my-chart/my-chart.component';

export const routes: Routes = [
    {
        title: "Home",
        path: "",
        component: HomeComponent,
    },
    {
        title: "Showcase",
        path: "showcase",
        component: ShowcaseComponent,
        // canActivate: [authGuard]
    },
    {
        title: "My Table",
        path: "table",
        component: MyTableComponent,
        // canActivate: [authGuard]
    },
    {
        title: "My Chart",
        path: "chart",
        component: MyChartComponent,
    // canActivate: [authGuard]
    },
    {
        title: "Page Not Found",
        path: "**",
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];
