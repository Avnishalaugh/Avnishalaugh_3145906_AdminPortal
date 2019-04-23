import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentDataService } from '../../student-data.service';

@Component({
  selector: 'app-viewstudentdata',
  templateUrl: './viewstudentdata.component.html',
  styleUrls: ['./viewstudentdata.component.css']
})
export class ViewstudentdataComponent implements OnInit {
  student:any;
  viewRecord="View Student Record";

  constructor(private router: Router,private studentService : StudentDataService, private route: ActivatedRoute) { 
  
    this.student={
      birth:"",
      category:"", 
      date:"",
      declaration:"",
      domicile:"",
      fName:"",
      fatherName:"",
      marksheet:"",
      motherName:"",
      passport:""
    }
    this.studentService.studentSubject1$.subscribe(
      data => {
       
        this.student.birth= data[0].birth
        this.student.category=  data[0].category;
        this.student.date=  data[0].date;
        this.student.declaration=  data[0].declaration;
        this.student.domicile=  data[0].domicile;
        this.student.fName=  data[0].fName;
        this.student.fatherName=  data[0].fatherName;
        this.student.marksheet=  data[0].marksheet;
        this.student.motherName=  data[0].motherName;
        this.student.passport=  data[0].passport;
        this.student.policeClearance=  data[0].policeClearance;
      console.log("Student"+this.student);
      }
    );
  }

  ngOnInit() {
    const student = this.route.snapshot.paramMap.get('student');
    this.student=JSON.parse(student)[0];
    if(this.student.birth==true){
      this.student.birth="checked";
    }
    else{
      this.student.birth="unchecked";
    }
    if(this.student.declaration==true){
      this.student.declaration="checked";
    }
    else{
      this.student.declaration="unchecked";
    }
    if(this.student.domicile==true){
      this.student.domicile="checked";
    }
    else{
      this.student.domicile="unchecked";
    }
    if(this.student.policeClearance==true){
      this.student.policeClearance="checked";
    }
    else{
      this.student.policeClearance="unchecked";
    }
    if(this.student.passport==true){
      this.student.passport="checked";
    }
    else{
      this.student.passport="unchecked";
    }
    if(this.student.marksheet==true){
      this.student.marksheet="checked";
    }
    else{
      this.student.marksheet="unchecked";
    }
    console.log(this.student);
  }
 
  navigateBack(){
    this.router.navigate(['/studentsList']);
   }
}
