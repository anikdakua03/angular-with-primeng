import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyComponentsComponent } from './components/my-components/my-components.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

export const routes: Routes = [
    {
        title: "Home",
        path: "",
        component: MyComponentsComponent
    },
    {
        title: "Sign In",
        path: "sign-in",
        component: SignInComponent
    },
    {
        title: "Page Not Found",
        path: "**",
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];
