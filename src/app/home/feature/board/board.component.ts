import { Component, OnInit, ViewChild } from '@angular/core';

import { StudentDataService } from '../student-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  title = 'Onboarding Form';
  selectedTab : String;
  studentData: Array<any>;
   
  @ViewChild('studentDataForm') studentDataForm : NgForm;
  constructor(private _studentService : StudentDataService  ) { 
 //   localStorage.setItem('loginFlag', "false");
  }

  ngOnInit() {
    this.studentData=[];
  }

  sendStudentData(studentData): void{
    this._studentService.addStudent(studentData);
    this.studentDataForm.reset();
  }
}
