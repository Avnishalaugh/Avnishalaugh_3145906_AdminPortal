import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit, OnDestroy {

  studentData: Array<any>;
  studentEdittedData: Array<any>;
  // subscription: Subscription;
  confirm = false;
  @Input() stdEdittedData: any;
  error: any;


  categoryCheckD=false;
  categoryCheckI=false;

  private _searhStudent: string;
  category1:string = '';
  index: string;

  public get searhStudent(): string {
    return this._searhStudent;
  }
  public set searhStudent(value: string) {
    this._searhStudent = value;
    this.studentEdittedData = this.filteredStudentData(value);
  }


  constructor(private studentService: StudentDataService, private router: Router, private confirmationDialogService: ConfirmationDialogService) {
    //localStorage.setItem('loginFlag', "false");
    this.studentData = this.studentService.getAllStudents();
    this.studentService.studentSubject$.subscribe(data => {
      this.studentData.push(data);
     // this.category1=data.category;
      //console.log(this.category1);
      if(data.category==="Domestic"){
         this.categoryCheckD=true;
      }
      else{
        this.categoryCheckI=true;
      }
    }
    );
    this.studentService.studentSubject2$.subscribe(data => {
      console.log("edit student data"+data);
      this.studentData.splice(data.index,1,data);
     // this.studentData.push(data);
     // this.index=data.index;
     // this.studentData.indexOf
     //this.editStudentDataList(data.index);
    
  })
    this.studentEdittedData = this.studentData;
  }


  ngOnInit() {
    //this.editStudentDataList();
}

editStudentDataList(){
var delStd = this.studentData.indexOf(this.index);
this.studentData.splice(delStd, 1);
}

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  filteredStudentData(value: string) {
    return this.studentData.filter(student => student.fName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  filterStudentDataByCategory(category: string) {
    if (category) {
      if (category === "all") {
        this.studentEdittedData = this.studentData;
        console.log("ALL case")
      }
      else {
        this.studentEdittedData = this.studentData.filter(student =>
          student.category.toLowerCase().indexOf(category.toLowerCase()) !== -1);
        console.log("Showing only Student Data with Domestic Category");
        console.log(this.studentData);
      }
    }
  }

  sendStudentData(student): void {
    this.studentService.sendStudentData(student);
  }

  viewStudentData(student) {
    var std = this.studentData.indexOf(student);
    this.studentData = this.studentData.slice(std, std + 1);
    this.studentService.sendStudentData(this.studentData);
    this.router.navigate(['/viewStudent',JSON.stringify(this.studentData)]);
  }

  editStudentData(student) {
    // this.router.navigate(['/editStudent',student.name]);
    var std = this.studentData.indexOf(student);
    localStorage.setItem("editIndex",std.toString());
    this.stdEdittedData = this.studentData.slice(std, std + 1);
    //this.editStudentDataList();
    console.log("Editted student data" + this.stdEdittedData);
    this.router.navigate(['/editStudent',JSON.stringify(this.stdEdittedData)]);
  }

  delStudentData(student, confirm) {
    if (confirm) {
      var delStd = this.studentData.indexOf(student);
      this.studentData.splice(delStd, 1);
    }
  }

  public openConfirmationDialog(student) {
    this.confirmationDialogService.confirm('Confirm', 'Do you really want to delete record ?')
      .then((confirmed) => this.delStudentData(student, confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
