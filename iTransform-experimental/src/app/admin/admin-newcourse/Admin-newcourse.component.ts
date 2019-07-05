import { Component, OnInit } from "@angular/core";
import { AdminService } from '../admin.service';
import { Course } from 'src/app/user/user';



@Component({
    templateUrl:'./admin-newcourse.component.html',
})
export class AdminNewCourseComponent implements OnInit{

    course:Course;

    constructor(private adminService:AdminService){}


    ngOnInit(){

    }

    addNewCourse(){
        this.adminService.addNewCourse(this.course).subscribe((data) =>{
            this.course = data;
        })
    }
}