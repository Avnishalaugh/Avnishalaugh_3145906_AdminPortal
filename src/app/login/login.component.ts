import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=[{
  name:"admin",
  pass:"admin"
},
{
  name:"avnish",
  pass:"avi"
}
]

pass:string
@Input() loginFlag=false;
@Input() username: string;
  myForm: any;

  userValue:string = '';
  passValue:string = '';

  constructor(private router : Router) { }

   ngOnInit() {
    localStorage.setItem('user', JSON.stringify(this.user));
   }

   bindUserName(user){
    this.username=user;
   }

   validateUsers(name : any, password:any){
    var users = JSON.parse(localStorage.getItem('user'));
    console.log(users);
    for (var i = 0; i < users.length; i++) {
    
    if(name==users[i].name){
      console.log("username exists");
        if(password==users[i].pass){
          this.bindUserName(users[i].name);
          localStorage.setItem('username',users[i].name);
          this.loginFlag=true;
          localStorage.setItem('loginFlag',"true");
          console.log("login successfull");
          alert("Login Successfull..!!")
          this.resetUserData();
          this.router.navigate(['/home']);
          
          break;
        }
        else{
        alert("Invalid Credentials..!!");
          this.resetUserData();
        }
    }
    else{
        this.resetUserData();
      }
  
    } 
   }

   resetUserData(){
    this.userValue = null;
    this.passValue = null;
   }

  //  clickButton(){
  //    this.popup.show();
  //  }

  // clearForm() {
  //   this.myForm.reset();
  //  }
}
