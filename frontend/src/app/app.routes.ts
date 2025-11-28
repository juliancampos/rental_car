import { Routes } from '@angular/router';
import { RegisterComponent } from './page/register/register.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: '', component: HomeComponent
    }
];
