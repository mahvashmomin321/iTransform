import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/course/course';
import { CourseService } from 'src/app/course/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './welcome-chapter.component.html',
    styleUrls: ['./welcome-chapter.component.css']
})
export class WelcomeChapterComponent implements OnInit {

    course: Courses;

    constructor(private courseService: CourseService,
                private route: ActivatedRoute) {}


    ngOnInit() {
        this.route.paramMap.subscribe((map) => {
            // tslint:disable-next-line:prefer-const
            let courseId = map.get('courseId');
            // tslint:disable-next-line:prefer-const
            let cId = Number(courseId);
            this.courseService.getCourseById(cId).subscribe((data) => {
                this.course = data;
                console.log(data);
            });
        });
    }
}