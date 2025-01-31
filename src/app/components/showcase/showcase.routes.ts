import { Routes } from "@angular/router";

export const showcaseRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./showcase.component').then(c => c.ShowcaseComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-table'
            },
            {
                path: 'my-table',
                title: 'Table',
                loadComponent: () => import('./my-table/my-table.component').then(c => c.MyTableComponent),
            },
            {
                path: 'my-chart',
                title: 'Chart',
                loadComponent: () => import('./my-chart/my-chart.component').then(c => c.MyChartComponent),
            }
        ]
    },
];