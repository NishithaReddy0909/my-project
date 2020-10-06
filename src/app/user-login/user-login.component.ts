import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userid:string="";
  password:string="";
  status:string="";
  //isValid=true;
  constructor() { }

  ngOnInit(): void {
  }
  onvalidate(){
    if(this.userid.toLowerCase()=="nishitha" && this.password=="nishitha*@1234")
    {
      this.status="Login Sucessful ";
    }
    else{
      this.status="Invalid Userid or Password";
    }
  }
  getStatus(){
   // return this.isValid?'green':'red';
   return this.status.includes("Sucessful")?'green':'red';
  }
  isValid(){
    return this.status.includes("Sucessful");
  }

}
