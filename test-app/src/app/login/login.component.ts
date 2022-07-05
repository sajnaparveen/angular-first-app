import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


userdetail={
  username:"sajna",
  password:"1234"
}

inits={
  username:"",
  password:""
}
addname:string="";
addnames:string[]=[]

constructor() { }

  ngOnInit(): void {

  }
login(){
  if(this.userdetail.username==this.inits.username && this.userdetail.password==this.inits.password){
    console.log("login success")
  }else{
    console.log("login failed")
  }
}
addName(){
  if(this.addname !=""){
    this.addnames.push(this.addname)
  }
}
}
