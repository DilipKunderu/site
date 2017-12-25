import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component'; 
const router: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);