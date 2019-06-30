import { WelcomeCourseComponent } from "./welcome-course.component";
import { Component } from '@angular/compiler/src/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../course/course.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Welcome Course Component', ()=> {
    let component: WelcomeCourseComponent;
    let fixure: ComponentFixture<WelcomeCourseComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let courseService: CourseService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WelcomeCourseComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [
                CourseService
            ]
        }).compileComponents().then(() =>{
            fixure = TestBed.createComponent(WelcomeCourseComponent);
            component = fixure.componentInstance;
            de = fixure.debugElement;
            // tslint:disable-next-line:no-unused-expression
            component.ngOnInit;
            component = new WelcomeCourseComponent(courseService);
        });
    }));

    it('should create the component', ()=> {
        expect(component).toBeTruthy();
    });
    it('should return list of courses', ()=> {
        fixure.detectChanges();
        console.log(component.courses);
        const cards = de.queryAll( By.css('.course-card'));
        expect(cards).toBeTruthy();
        expect(cards.length).toBe(0);
    });

    it('should test OnInit function',() => {
        spyOn(component, 'ngOnInit').and.callThrough();
        expect(component.ngOnInit).toBeTruthy();
        expect(component.ngOnInit).toBeDefined();
    });

    it('should display the first Course', ()=> {

    })
});
