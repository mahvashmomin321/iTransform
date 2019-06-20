import { RegistrationComponent } from './registration.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseService } from 'src/app/course/course.service';



describe('Registration Form', () => {
    let comp: RegistrationComponent;
    let fixure: ComponentFixture<RegistrationComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RegistrationComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [
                FormBuilder,
                UserService,
                CourseService
            ]
        }).compileComponents().then(() => {
            fixure = TestBed.createComponent(RegistrationComponent);
            comp = fixure.componentInstance;
            comp.ngOnInit();
            de = fixure.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));
    it('form data should be valid', async(() => {
        // tslint:disable-next-line:no-string-literal
        comp.registrationForm.controls['userName'].setValue('mah');
         // tslint:disable-next-line:no-string-literal
        comp.registrationForm.controls['name'].setValue('mah');
         // tslint:disable-next-line:no-string-literal
        comp.registrationForm.controls['email'].setValue('mah@gmail.com');
         // tslint:disable-next-line:no-string-literal
        comp.registrationForm.controls['contactNumber'].setValue('8879494986');
         // tslint:disable-next-line:no-string-literal
        comp.registrationForm.controls['password'].setValue('1234568');
        // tslint:disable-next-line:no-string-literal
        expect(comp.userName.valid).toBeTruthy();
        expect(comp.name.valid).toBeTruthy();
        expect(comp.email.valid).toBeTruthy();
        expect(comp.contactNumber.valid).toBeTruthy();
        expect(comp.password.valid).toBeTruthy();
        }));
});
