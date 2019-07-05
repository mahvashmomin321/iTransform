import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../user/user';
import { Observable } from 'rxjs';



@Injectable()
export class AdminService{

    baseUrl = "http://localhost:8084/course"

    constructor(private http:HttpClient){}
        
    addNewCourse(course:Course):Observable<Course>{
        return this.http.post<Course>(this.baseUrl,course);
    }

}