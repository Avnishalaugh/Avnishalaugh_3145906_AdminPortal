import { Component, OnInit, Input,OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentDataService } from '../../student-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editstudentdata',
  templateUrl: './editstudentdata.component.html',
  styleUrls: ['./editstudentdata.component.css']
})
export class EditstudentdataComponent implements OnInit {
  
  student:any;
  stdEdittedData=[];
  studentSubject1: any;
  student1={
    birth:"",
    category:"", 
    date:"",
    declaration:"",
    domicile:"",
    fName:"",
    fatherName:"",
    marksheet:"",
    motherName:"",
    passport:"",
    police:"",
    index:""
  }

  @Input() public studentData: any;
  @ViewChild('studentEditDataForm') studentDataForm : NgForm;
  oldStudent: any;
  index: string;
  constructor(private _studentService : StudentDataService ,private router: Router,private stdService : StudentDataService,private route: ActivatedRoute) { 
    //localStorage.setItem('loginFlag', "false");
  }

  ngOnInit() {
    const student = this.route.snapshot.paramMap.get('student');
    this.student=JSON.parse(student)[0];
  
    //this.stdEdittedData=this.stdService.students[0];
   // console.log(this.stdEdittedData);
  //  this.subscription= this.stdService.studentSubject1$.subscribe(
  //     (data) => {
  //       this.studentSubject1=data;
  //     }
  //   );
  }
 
  navigateBack(){
    this.router.navigate(['/studentsList']);
   }

   saveEditChanges(fName,category,domicile,birth,passport,police,declaration,marksheet,date,father,mother): void{
     this.student1.birth=birth;
     this.student1.category=category;
     this.student1.declaration=declaration;
     this.student1.domicile=domicile;
     this.student1.fName=fName;
     this.student1.fatherName=father;
     this.student1.marksheet=marksheet;
     this.student1.police=police;
     this.student1.date=date;
     this.student1.motherName=mother;
     this.student1.passport=passport;
     this.index=localStorage.getItem("editIndex");
     this.student1.index=this.index;
    this._studentService.addEditStudentData(this.student1);
    this.router.navigate(['/studentsList']);
    this.studentDataForm.reset();
  }
}
