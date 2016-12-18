import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'student-list',
  templateUrl: 'student-list.component.html',
  styleUrls: ['student-list.component.css'],
  providers: [
      StudentService
  ]
})

export class StudentListComponent implements OnInit {
     students: Observable<Student[]>;
     newStudent: Student;
     grades: Number[] = [6, 7, 8, 9, 10, 11, 12, 13, 14];
     errorMessage: String;


     constructor(private studentService: StudentService) {
         // initialize the new student. 
         this.newStudent = new Student();
         this.newStudent.firstName = '';
         this.newStudent.lastName = '';
         this.newStudent.grade = 6;
         this.newStudent.locked = false;

         this.errorMessage = '';
     }

     ngOnInit(): void {
         this.getStudents();
     }

     getStudents(): void {
         this.students = this.studentService.getStudents();
     }

     addStudent(): void {
         this.errorMessage = '';
         console.log(this.newStudent);
         if(this.newStudent.firstName && this.newStudent.lastName) {
             this.studentService.addStudent(this.newStudent);
             // reset newStudent values for next add.
             this.newStudent.grade = 6;
             this.newStudent.firstName = '';
             this.newStudent.lastName = '';
         } else {
             this.errorMessage = 'Need to set both first and last names.';
         }
     }

     deleteStudent(): void {
         this.errorMessage = '';
         console.log('deleting student');
     }
}