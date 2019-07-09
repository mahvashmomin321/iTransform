import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/course/course';



@Injectable()
export class AdminService{

    baseUrl = "http://localhost:8084/course"

    constructor(private http:HttpClient){}
        
    addNewCourse(course: Courses):Observable<Courses[]>{
        return this.http.post<Courses[]>(this.baseUrl, course);
    }

}