import { Routes } from '@angular/router';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminNewCourseComponent } from './admin-newcourse/admin-newcourse.component';

export const adminRoute: Routes = [
    {path: 'adminwelcome', component: AdminWelcomeComponent},
    {path: 'addcourse', component: AdminNewCourseComponent}
];
