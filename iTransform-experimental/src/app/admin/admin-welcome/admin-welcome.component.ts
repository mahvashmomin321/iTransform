import { Component, OnInit } from "@angular/core";
import { AdminService } from '../admin.service';
import { Course } from 'src/app/user/user';



@Component({
    templateUrl:'./admin-welcome.component.html',
    styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent implements OnInit{

    course:Course;

    constructor(private adminService:AdminService){}


    ngOnInit(){

    }

    
}