import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

userName :String="sajna";
btndisable =true;
message=""

age=20;
date=18;

users=[{
  name:'sajna',
  number:1234,
  status:'active',
  place:'karur'
},{
  name:'sharmi',
  number:1234,
  status:'active',
  place:'delhi'
},
{
  name:'musthi',
  number:1234,
  status:'InActive',
  place:'chennai'
},
{
  name:'aarifa',
  number:1234,
  status:'active',
  place:'delhi'
},
{
  name:'asfa',
  number:1234,
  status:'InActive',
  place:'karur'
}
]
  constructor(public router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
this.btndisable = false;
    },2000)
  }

  changename(){
    this.userName="sajnaparveen"
  }
  gotologin(){
    this.router.navigate(['/login'])
  }
  @Input('subjectchild') subjectchild :any
  @Input('data') data:any
  @Output() userData =new EventEmitter<number>()
  generatenumber(){
const randomnum = Math.random()
this.userData.emit(randomnum)

  }
  @ViewChild('userForm') uf : NgForm;
  onsubmit(userForm : NgForm){
    console.log("submitted",userForm)
  }
  // setDefaultValues(userForm : NgForm){
  //   let city={
  //     cirt:"karur",
  //     terms:true
  //   }
  //   userForm.setValue(city)
  // }

  setvalue(){
this.uf.form.patchValue({
  city:{
  inputCity:"karur",
  },
  gridCheck:true
})
  }
}
