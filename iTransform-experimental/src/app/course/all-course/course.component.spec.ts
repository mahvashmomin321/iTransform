import { CourseComponent } from "./course.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe("Course Component",() =>{
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;
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
            fixture = TestBed.createComponent(CourseComponent);
            component = fixture.componentInstance;
            
        });

        let store = {};
        spyOn(sessionStorage, 'getItem').and.callFake((key: string): string => {
                return store[key] || null;
            });
        spyOn(sessionStorage, 'removeItem').and.callFake((key: string): void =>  {
                delete store[key];
              });
        spyOn(sessionStorage, 'setItem').and.callFake((key: string, value: string): string =>  {
                // tslint:disable-next-line:no-angle-bracket-type-assertion
                return store[key] = <string> value;
              });
        spyOn(sessionStorage, 'clear').and.callFake(() =>  {
                  store = {};
              });

        describe('session storage', () => {
            it('should set an Item',() => {
                // // tslint:disable-next-line:max-line-length
                // expect(sessionStorage.setItem('user', '[contactNumber: 8879494986, course: [],email: mah@gmail.com,name: mah ,password: mahvash21,userName: mah]'))
                // .toBe('[contactNumber: 8879494986, course: [],email: mah@gmail.com,name: mah ,password: mahvash21,userName: mah]');
                // // tslint:disable-next-line:max-line-length
                // expect(sessionStorage.getItem('[contactNumber: 8879494986, course: [],email: mah@gmail.com,name: mah ,password: mahvash21,userName: mah]')).toBe('user');
    
                spyOn(window.sessionStorage.setItem, 'setItem');
                window.sessionStorage.setItem('test','test1');
                expect(window.sessionStorage.setItem).toHaveBeenCalledWith('test','test1');
            });
        });
    }));
})
