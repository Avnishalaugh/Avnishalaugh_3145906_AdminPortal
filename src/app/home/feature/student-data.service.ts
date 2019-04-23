import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

students=[
  {
      "fName":"Avnish",
      "category":"Domestic",
      "domicile":"True",
      "birth":"True",
      "marksheet":"True",
      "policeClearance":"False",
      "passport":"True",
      "declaration":"False",
      "date":"25-07-1998",
      "fatherName":"Mr Baldev Raj",
      "motherName":"Mrs Usha Alaugh"
  }, 
  {
       "fName":"Ishaan",
       "category":"International",
       "domicile":"True",
       "birth":"True",
       "marksheet":"True",
       "policeClearance":"True",
       "passport":"True",
       "declaration":"False",
       "date":"18-01-2013",
       "fatherName":"Mr Nitin Girdhar",
       "motherName":"Mrs Shikha Girdhar"
   }, 
   {
       "fName":"Ruhaani",
       "category":"International",
       "domicile":"True",
       "birth":"True",
       "marksheet":"True",
       "policeClearance":"False",
       "passport":"False",
       "declaration":"True",
       "date":"23-10-2018",
       "fatherName":"Mr Nitin Girdhar",
       "motherName":"Mrs Shikha Girdhar"
  } 
]

  private studentSubject = new Subject<any>();
  studentSubject$ = this.studentSubject.asObservable();
  public studentSubject1 = new Subject<any>();
  studentSubject1$ = this.studentSubject1.asObservable();
  public studentSubject2 = new Subject<any>();
  studentSubject2$ = this.studentSubject2.asObservable();

  constructor(private http:HttpClient) { }

  // addStudent(fName:any,category:any,domicile:any,birth:any,marksheet:any,policeClearance:any,passport:any,declaration:any,date:any,fatherName:any,motherName:any){
  //   let student =new User(fName,category,domicile,birth,marksheet,policeClearance,passport,declaration,date,fatherName,motherName);
  //   console.log(student);
  //   this.studentData.push(student);
  //   console.log(this.studentData);
  // }

  public getAllStudents(){
    // return this.http.get<User[]>("assets/student.json");
  //   return this.studentSubject.asObservable();
  return this.students;
   }

  addStudent(data){
   this.studentSubject.next(data);
  }

  sendStudentData(student){
    this.studentSubject1.next(student);
  }

  addEditStudentData(data){
    this.studentSubject2.next(data);
  }

}
