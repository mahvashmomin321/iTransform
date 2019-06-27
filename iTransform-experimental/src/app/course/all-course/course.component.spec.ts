import { CourseComponent } from "./course.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe ('Course Component', ()=> {
    let comp: CourseComponent;
    let fixure: ComponentFixture<CourseComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CourseComponent
            ],
            imports: [
                BrowserModule,
                FormsModule
            ]

        }).compileComponents().then(() => {
            fixure= TestBed.createComponent(CourseComponent);
            comp = fixure.componentInstance;
            fixure.detectChanges();
        });

        it('should create', () => {
            expect(comp).toBeDefined();
        });
    }));
});