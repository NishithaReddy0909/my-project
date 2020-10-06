import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   userid="nishitha";
   password="nishitha*@1234"
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    if(this.userid=="nishitha" && this.password=="nishitha*@1234"){
      console.log("Valid UserId and Password");
    }
    else{
      console.log("invalid userid or password");
    }
  }
  onkeyup(){
    console.log(this.userid);
  }
  onkey(){
    console.log(this.password);
  }

}
