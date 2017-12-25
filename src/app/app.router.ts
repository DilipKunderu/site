import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';

const router: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);