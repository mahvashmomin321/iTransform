import { Routes } from "@angular/router";
import { WelcomeCourseComponent } from './welcome-course.component';
import { WelcomeChapterComponent } from './welcome-chapter/welcome-chapter.component';

export const welcomeCourseRoute: Routes = [
    {path: 'welcomecourse', component: WelcomeCourseComponent},
    {path: 'welcomechapter/:courseId', component: WelcomeChapterComponent}
];